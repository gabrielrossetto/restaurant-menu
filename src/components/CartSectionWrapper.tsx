import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import { RootState } from '../store/store';
import { incrementQuantity, decrementQuantity } from '../store/reducers/cartReducer';

function CartSectionWrapper() {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <Box className="w-2/6 bg-background h-fit shadow-[rgba(0,_0,_0,_0.15)_0px_3px_8px]">
      <Box className="flex items-center justify-start w-full h-16 px-4 shadow bg-tertiary">
        <h1 className="text-2xl font-medium text-textSecondary">Carrinho</h1>
      </Box>
      {items && items?.length > 0 ? (
        <>
          {items.map(item => (
            <Box key={item.id} className="flex flex-col items-center justify-center w-full">
              <Box className="flex flex-col items-center justify-center w-full px-2 my-2 min-h-16">
                <Box className="flex items-center justify-between w-full">
                  <Box className="flex flex-col items-start justify-between">
                    <h1 className="text-textPrimary">{item?.name}</h1>
                    {item?.selectedModifierName && <h1 className="text-textTertiary">{item?.selectedModifierName}</h1>}
                    <Box className="flex items-center justify-between space-x-2">
                      <RemoveCircle className="text-primary" onClick={() => handleDecrement(item.id)} />
                      <span className="font-bold text-primary">{item?.quantity}</span>
                      <AddCircleIcon className="text-primary" onClick={() => handleIncrement(item.id)} />
                    </Box>
                  </Box>
                  <h1 className="font-medium text-primary">{item?.price + (item?.selectedModifierPrice || 0)}</h1>
                </Box>
              </Box>
            </Box>
          ))}

          <Box className="flex items-center justify-between w-full px-4 border-b-2 shadow bg-tertiary h-14">
            <span className="text-primary">Sub total</span>
            <span className="font-medium text-primary">{total}</span>
          </Box>

          <Box className="flex items-center justify-between w-full px-4 shadow bg-tertiary h-14">
            <span className="text-2xl text-primary">Total</span>
            <span className="text-2xl font-medium text-primary">{total}</span>
          </Box>
        </>
      ) : (
        <Box className="flex flex-col items-center justify-center w-full py-6">
          <span className="text-textSecondary">Seu carrinho está vazio</span>
        </Box>
      )}
    </Box>
  );
}

export default CartSectionWrapper;
