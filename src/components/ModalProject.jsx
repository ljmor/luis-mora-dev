import { Button, Heading, HStack, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text } from "@chakra-ui/react";

export const ModalProject = ({ isOpen, onClose, title, body, company, to, badges }) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset='scale'
        >
            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
            <ModalContent
                borderRadius={10}
                minHeight={{ base: '400px', md: '400px' }}
                minWidth={{ base: '100px', md: '550px' }}
                bgColor='#f2f2f2'
                textColor='black'
                boxShadow='0 0 90px 5px black'
                pt={5}
            >
                <ModalHeader textAlign='center'>{title}</ModalHeader>
                <ModalBody px={16}>
                    {body}
                <Heading size='sm' mt={5} mb={2}>Used Technologies:</Heading>
                <HStack>{ badges }</HStack>
                </ModalBody>

                <ModalFooter>
                    <Text textAlign='left' width='75%' fontSize='sm' color='gray.600' >{company}</Text>
                    <Button size='sm' bgColor='#dae7e8' borderRadius='full'>
                        <Link
                            _hover={{ textDecoration: 'none' }}
                            href={to}
                            target='_blank'
                        >
                            👉 Check It Out
                        </Link>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
