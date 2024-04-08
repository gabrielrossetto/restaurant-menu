# Component Documentation

## NavBar Component

The `NavBar` component represents the navigation bar of the application.

### Properties:

- None

### Example Usage:

```jsx
import NavBar from './NavBar';
<NavBar />
```

## ModalItemContentWrapper Component

The `ModalItemContentWrapper` component is responsible for displaying the details of a selected product within a modal.

### Properties:

- `selectedProduct`: (MenuItemType | null) The selected product object containing details like name, description, modifiers, and images.
- `closeModal`: (function) Callback function to close the modal.

### Example Usage:

```jsx
import ModalItemContentWrapper from './ModalItemContentWrapper';
<ModalItemContentWrapper selectedProduct={selectedProduct} closeModal={closeModal} />
```

## ModalItemContentWrapper Component

The `ModalItemContentWrapper` component is responsible for displaying the content of the shopping basket modal.

### Properties:

- `closeModal`: (function) Callback function to close the modal.

### Example Usage:

```jsx
import ModalItemContentWrapper from './ModalItemContentWrapper';
<ModalItemContentWrapper closeModal={closeModal} />
```

## LoadingSpinner Component

The `LoadingSpinner` component is used to display a loading spinner while content is being fetched or processed.

### Example Usage:

```jsx
import LoadingSpinner from './LoadingSpinner';
<LoadingSpinner />
```

## ItemsListWrapper Component

The `ItemsListWrapper` component is responsible for rendering a list of items categorized by sections. It also provides functionality to filter items based on a search query and open a modal to view item details.

### Props:

- `openModal`: (function) A function to open a modal and view item details.

### Example Usage:

```jsx
import ItemsListWrapper from './ItemsListWrapper';
<ItemsListWrapper openModal={handleOpenModal} />
```

## Header Component

The `Header` component represents the top navigation bar of the application.

### Functionality:

- **Banner Image:** If a banner image is provided in the application settings, it is displayed as the header background. If not, the default logo is displayed.
- **Responsive Design:** The component adapts to different screen sizes, ensuring a consistent user experience across devices.

### Example Usage:

```jsx
import Header from './Header';
<Header />
```


## GenericErrorMessage Component

The `GenericErrorMessage` component is used to display a generic error message to the user.

### Properties:

- `errorMessage`: (string | null) The error message to be displayed.

### Example Usage:

```jsx
import GenericErrorMessage from './GenericErrorMessage';
<GenericErrorMessage errorMessage="An error occurred while loading data." />
```

## DefaultLayout Component

The `DefaultLayout` component is a layout component providing a default structure for the application.

### Properties:

- `children`: (ReactNode) The child components to be rendered within the layout.

### Example Usage:

```jsx
import DefaultLayout from './DefaultLayout';

<DefaultLayout>
  {/* Your child components here */}
</DefaultLayout>
```

## CartSectionWrapper Component

The `CartSectionWrapper` component is responsible for rendering the cart section in the application.

### Example Usage:

```jsx
import CartSectionWrapper from './CartSectionWrapper';

<CartSectionWrapper />
```