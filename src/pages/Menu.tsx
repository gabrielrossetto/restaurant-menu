import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, InputAdornment, IconButton, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItemType } from "../@types/menu";
import ItemsListWrapper from "../components/ItemsListWrapper";
import CartSectionWrapper from "../components/CartSectionWrapper";
import ModalContentWrapper from "../components/ModalContentWrapper";
import LoadingSpinner from "../components/LoadingSpinner";
import GenericErrorMessage from "../components/GenericErrorMessage";
import { RootState } from '../store/store';
import { setSearchFilter } from "../store/reducers/menuReducer";

function Menu() {
  const { error, loading, searchFilter } = useSelector((state: RootState) => state.menu);
  const [selectedProduct, setSelectedProduct] = useState<MenuItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = (product: MenuItemType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
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
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContentWrapper selectedProduct={selectedProduct} closeModal={closeModal} />
      </Modal>

      {!error && !loading && (
        <Box className="flex flex-col items-center justify-start w-full h-auto min-h-screen mt-1 bg-secondary">
          <Box className="w-1/2">
            <TextField
              placeholder="Search menu items"
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

          <Box className="flex w-1/2 p-8 mt-1 space-x-4 bg-tertiary">
            <ItemsListWrapper openModal={openModal} />

            <CartSectionWrapper />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Menu;
