import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, InputAdornment, IconButton, Modal, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { MenuItemType } from "../@types/menu";
import ItemsListWrapper from "../components/ItemsListWrapper";
import CartSectionWrapper from "../components/CartSectionWrapper";
import ModalItemContentWrapper from "../components/ModalItemContentWrapper";
import ModalCartContentWrapper from "../components/ModalCartContentWrapper";
import LoadingSpinner from "../components/LoadingSpinner";
import GenericErrorMessage from "../components/GenericErrorMessage";
import { RootState } from '../store/store';
import { setSearchFilter } from "../store/reducers/menuReducer";

function Menu() {
  const { error, loading, searchFilter } = useSelector((state: RootState) => state.menu);
  const { items } = useSelector((state: RootState) => state.cart);
  const [selectedProduct, setSelectedProduct] = useState<MenuItemType | null>(null);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const openItemModal = (product: MenuItemType) => {
    setSelectedProduct(product);
    setIsItemModalOpen(true);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsItemModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchFilter(event.target.value));
  };

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (error) {
    return (
      <GenericErrorMessage errorMessage={error} />
    );
  }

  return (
    <>
      <Modal
        open={isItemModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-item-title"
        aria-describedby="modal-item-description"
      >
        <ModalItemContentWrapper selectedProduct={selectedProduct} closeModal={closeModal} />
      </Modal>

      <Modal
        open={isCartModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-cart-title"
        aria-describedby="modal-cart-description"
      >
        <ModalCartContentWrapper closeModal={closeModal} />
      </Modal>

      {!error && !loading && (
        <Box className="flex flex-col items-center justify-start w-full h-auto min-h-screen mt-1 bg-secondary" data-testid="menu-page">
          <Box className="w-11/12 md:w-1/2">
            <TextField
              placeholder={t('searchItemsPlaceholder')}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="w-full px-4 py-2 border bg-background"
              value={searchFilter}
              onChange={handleSearchChange}
            />
          </Box>

          <Box className="flex flex-col w-full mt-1 space-x-4 md:p-8 md:flex-row md:w-1/2 bg-tertiary">
            <ItemsListWrapper openModal={openItemModal} />
            <CartSectionWrapper />
          </Box>

          {items?.length > 0 && (
            <Box className="fixed bottom-0 left-0 right-0 p-4 md:hidden">
              <Button variant="contained" className="w-full !bg-primary !rounded-2xl" onClick={openCartModal}>
                {t('basket')} • {t('items', { count: items.length })}
              </Button>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default Menu;
