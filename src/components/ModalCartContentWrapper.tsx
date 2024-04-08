import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import CloseIcon from '@mui/icons-material/Close';
import { RootState } from '../store/store';
import { incrementQuantity, decrementQuantity } from '../store/reducers/cartReducer';

function ModalItemContentWrapper({ closeModal }: { closeModal: () => void }) {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <Box className="fixed inset-0 flex items-center justify-center">
      <Box className="relative md:max-w-md bg-white shadow-lg !md:min-w-96 space-y-2 pb-4 w-full h-full md:h-fit">
        <Box className="absolute top-0 right-0 z-10 m-2">
          <IconButton className="!text-black !bg-white" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>

        <div className="flex items-center justify-center h-12 border-b-2">
          <h1 className="text-lg font-medium text-textPrimary">Basket</h1>
        </div>

        {items && items?.length > 0 ? (
          <div className="">
            {items.map(item => (
              <Box key={item.id} className="flex flex-col items-center justify-center w-full">
                <Box className="flex flex-col items-center justify-center w-full px-2 my-2 min-h-16">
                  <Box className="flex items-center justify-between w-full">
                    <Box className="flex flex-col items-start justify-between">
                      <h1 className="text-textPrimary">{item?.name}</h1>
                      {item?.selectedModifierName && <h1 className="text-textTertiary">{item?.selectedModifierName}</h1>}
                      <Box className="flex items-center justify-between space-x-2">
                        <RemoveCircle className="text-primary" onClick={() => handleDecrement(item.id)} />
                        <span className="font-bold text-textPrimary">{item?.quantity}</span>
                        <AddCircleIcon className="text-primary" onClick={() => handleIncrement(item.id)} />
                      </Box>
                    </Box>
                    <h1 className="font-medium text-textPrimary">{item?.price + (item?.selectedModifierPrice || 0)}</h1>
                  </Box>
                </Box>
              </Box>
            ))}

            <Box className="flex items-center justify-between w-full px-4 border-b-2 shadow bg-tertiary h-14">
              <span className="text-textPrimary">Sub total</span>
              <span className="font-medium text-textPrimary">{total}</span>
            </Box>

            <Box className="flex items-center justify-between w-full px-4 shadow bg-tertiary h-14">
              <span className="text-2xl text-textPrimary">Total</span>
              <span className="text-2xl font-medium text-textPrimary">{total}</span>
            </Box>
          </div>
        ) : (
          <Box className="flex flex-col items-center justify-center w-full py-6">
            <span className="text-textSecondary">Seu carrinho está vazio</span>
          </Box>
        )}
      </Box >

      <Box className="fixed bottom-0 left-0 right-0 p-4 md:hidden">
        <Button variant="contained" className="w-full !bg-primary !rounded-2xl" onClick={closeModal}>
          Checkout now
        </Button>
      </Box>
    </Box>
  );
}

export default ModalItemContentWrapper;

