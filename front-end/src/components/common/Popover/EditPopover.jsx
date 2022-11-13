import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import EditForm from './EditForm';
import { FaEdit } from 'react-icons/fa';
import { useRef } from 'react';
const EditPopover = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        {/* <Icon color="green" as={FaEdit} /> */}
        <IconButton
          colorScheme="gray"
          size="sm"
          icon={<FaEdit color="green" />}
          boxShadow="0px 0px 6px 0px rgba(0, 0, 0, 0.5)"
        />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        <EditForm />
      </PopoverContent>
    </Popover>
  );
};

export default EditPopover;
