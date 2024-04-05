import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItemType } from "../@types/menu";
import { addItem } from '../store/reducers/cartReducer';

function ModalContentWrapper({ selectedProduct, closeModal }: { selectedProduct: MenuItemType | null, closeModal: () => void }) {
  const dispatch = useDispatch();
  const [selectedModifier, setSelectedModifier] = useState<{ name: string, id: number, price: number | null } | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const formattedSelectedProduct = {
    ...selectedProduct,
    selectedModifierName: selectedModifier?.name,
    selectedModifierId: selectedModifier?.id,
    selectedModifierPrice: selectedModifier?.price,
    quantity: quantity,
  }

  const calculateTotalPrice = () => {
    let totalPrice = selectedProduct?.price || 0;

    if (selectedModifier?.price !== null) {
      totalPrice += selectedModifier?.price || 0;
    }

    return totalPrice * quantity;
  };

  const handleClickAddToOrder = () => {
    dispatch(addItem(formattedSelectedProduct));
    closeModal();
  }

  return (
    <Box className="fixed inset-0 flex items-center justify-center">
      <Box className="relative max-w-md bg-white shadow-lg !min-w-96 space-y-2 pb-4">
        <Box className="absolute top-0 right-0 z-10 m-2">
          <IconButton className="!text-black !bg-white" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>

        {selectedProduct?.images && (
          <Box className="relative w-full !-mt-0.5 bg-gray-200 h-80 ">
            <img src={selectedProduct?.images[0]?.image} alt={selectedProduct?.name} className="object-cover w-full h-full" />
          </Box>
        )}

        <Box className="px-4">
          <h1 className="text-2xl font-bold text-textPrimary">{selectedProduct?.name}</h1>
          <span className="text-textSecondary">{selectedProduct?.description}</span>
        </Box>

        {selectedProduct?.modifiers && selectedProduct?.modifiers.map(modifier => (
          <>
            <Box className="p-4 bg-tertiary">
              <h1 className="font-bold text-textSecondary">{modifier?.name}</h1>
              <span className="text-textTertiary">Select 1 option</span>
            </Box>

            {modifier?.items?.map(modifierItem => (
              <Box className="space-y-8">
                <Box className="flex items-center justify-between px-4">
                  <Box className="flex flex-col items-start justify-center">
                    <h1 className="font-medium text-textPrimary">{modifierItem?.name}</h1>
                    <h1 className="text-textSecondary">{modifierItem?.price}</h1>
                  </Box>
                  <input onClick={() => setSelectedModifier({ name: modifierItem?.name, id: modifierItem?.id, price: modifierItem?.price })} type="radio" className="w-5 h-5 !border-primary accent-primary" checked={selectedModifier !== null && selectedModifier.id === modifierItem.id} />
                </Box>
              </Box>
            ))}
          </>
        ))}

        <Box className="flex items-center justify-between w-full">
          <Box className="flex items-center justify-center w-full space-x-4">
            <RemoveCircle
              className={`text-primary ${quantity === 1 ? 'cursor-not-allowed' : ''}`}
              onClick={quantity === 1 ? undefined : () => setQuantity(prevValue => prevValue - 1)}
            />
            <span className="text-2xl font-semibold text-center text-textPrimary">{quantity}</span>
            <AddCircleIcon className={`text-primary`} onClick={() => setQuantity(prevValue => prevValue + 1)} />
          </Box>
        </Box>

        <Box className="flex items-center justify-center w-full">
          {calculateTotalPrice() !== 0 ? (
            <Button className="w-4/5 !rounded-2xl !bg-primary" variant="contained" onClick={handleClickAddToOrder}>Add to order • {calculateTotalPrice()}</Button>
          ) : (
            <Button className="w-4/5 !rounded-2xl !bg-gray-300 cursor-not-allowed" variant="contained" disabled>Add to order</Button>
          )}
        </Box>
      </Box>
    </Box >
  );
}

export default ModalContentWrapper;

