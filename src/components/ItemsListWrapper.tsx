import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { MenuItemType } from "../@types/menu";
import { RootState } from '../store/store';
import { formatCurrency } from '../utils/currencyFormatter';

function ItemsListWrapper({ openModal }: { openModal: (item: MenuItemType) => void }) {
  const { menuData, searchFilter } = useSelector((state: RootState) => state.menu);
  const { settings } = useSelector((state: RootState) => state.settings);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (menuData?.sections && menuData?.sections?.length > 0) {
      setSelectedSection(menuData.sections[0].id);
    }
  }, [menuData]);

  const filteredItems = menuData?.sections?.map((section) => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchFilter.toLowerCase())
    ),
  })).filter(section => section.items.length > 0);

  const handleItemClick = (id: number) => {
    setSelectedSection(id);
    const accordionRef = accordionRefs.current.find(ref => ref?.id === `accordion-${id}`);
    if (accordionRef) {
      accordionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box className="flex h-fit flex-col items-start justify-start w-full md:w-2/3 bg-background shadow-[rgba(0,_0,_0,_0.15)_0px_3px_8px]">
      <Box className="flex items-center justify-center w-full">
        <nav className="flex items-center justify-start w-full p-6 space-x-4 bg-background">
          {filteredItems?.map((section) => (
            <Box onClick={() => handleItemClick(section?.id)} className="flex flex-col items-center justify-center overflow-hidden cursor-pointer sm:overflow-x-auto h-36" key={section?.id}>
              <Box className={`flex items-center justify-center overflow-hidden border-4 rounded-full w-28 h-28 ${selectedSection === section?.id ? 'border-primary' : 'border-white'}`}>
                <img src={section?.images[0]?.image} alt={section?.name} className="object-cover w-28 h-28" />
              </Box>
              <span className={`!text-textPrimary !font-semibold w-11/12 text-center ${selectedSection === section?.id ? 'border-b-4 border-black' : ''}`}>
                {section?.name}
              </span>
            </Box>
          ))}
        </nav>
      </Box>

      <Box className="w-full space-y-2 border-none bg-background">
        {filteredItems?.map((section) => (
          <Accordion
            defaultExpanded
            className="border-none"
            elevation={0}
            key={section?.id}
            id={`accordion-${section?.id}`}
            ref={ref => (accordionRefs.current[section.id] = ref)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h1 className="text-2xl text-textPrimary !font-semibold">{section?.name}</h1>
            </AccordionSummary>
            <AccordionDetails>
              {section.items.map(item => (
                <Box key={item?.id} className="flex items-center justify-between gap-2 py-2 cursor-pointer h-28" onClick={() => openModal(item)}>
                  <Box className="flex flex-col items-start w-3/5">
                    <span className="font-bold text-textPrimary">{item?.name}</span>
                    {item?.description && <span className="max-w-xs font-light truncate text-textSecondary">{item?.description}</span>}
                    <span className="font-bold text-textPrimary">{formatCurrency(item?.price, settings.ccySymbol)}</span>
                  </Box>
                  {item?.images && (
                    <Box className="flex flex-col items-start justify-center w-3/12">
                      <img src={item?.images[0]?.image} alt={item?.name} className="object-cover w-32 h-20 rounded" />
                    </Box>
                  )}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
        <Box className="flex items-center justify-center">
          <Button variant="text" className="w-11/12 !text-primary !font-bold" onClick={() => { }}>
            {t('viewAllergy')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ItemsListWrapper;
