import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import CategoryList, { CategoryListProps } from "./CategoryList";
import FilterList, { FilterListProps } from "./FilterList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef?: React.RefObject<any> | undefined;
  //CategoryList
  categoryListProps: CategoryListProps;
  //FilterList
  filterListProps: FilterListProps;
}

const AsideDrawer = ({
  isOpen,
  onClose,
  finalFocusRef,
  categoryListProps,
  filterListProps,
}: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      size={"xs"}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <CategoryList {...categoryListProps} />
          <FilterList {...filterListProps} />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" colorScheme="gray" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AsideDrawer;
