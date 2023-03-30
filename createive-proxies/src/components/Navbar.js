import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import creativeproxies from "../Image/creativeproxies.png";
import Icon from "../Image/Icon.png";
import discord1 from "../Image/discord1.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ham from "../Image/ham.png";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      fontFamily="Figtree"
      fontStyle="normal"
      letterSpacing="-0.02em"
      w="80%"
      m="auto"
    >
      <Box
        display={{ lg: "none", md: "flex", sm: "flex", base: "flex" }}
        pt="10px"
        pb="10px"
      >
        <Box
          h="33px"
          display={"flex"}
          justifyContent="center"
          onClick={handleClick}
          cursor="pointer"
        >
          <Image width="17%" height="33px" src={creativeproxies} alt="logo" />
          <Text
            height="31px"
            fontWeight="600"
            fontSize="22px"
            lineHeight="31px"
            color="#111822"
          >
            CreativeProxies
          </Text>
        </Box>
        <Box
          padding="10px"
          width={["auto", "30%", "30%"]}
          m="auto"
          mr="0px"
          height="39px"
          background="#077BFF"
          borderRadius="5px"
        >
          <Text
            height="19px"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            color="#FFFFFF"
          >
            Get Started
          </Text>
        </Box>
        <Box>
          <Button
            w="80%"
            onClick={onOpen}
            background="rgba(7, 123, 255, 0.25)"
            borderRadius="5px"
          >
            <Image src={ham} alt="ham" />
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Nav Item</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Login</Text>
                <Text>Blogs</Text>
                <Text>FAQs</Text>
                <Text>Resources</Text>
                <Text>Pricing</Text>
                <Text>Join Discord</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>

      <Flex
        display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
        justifyContent={"center"}
        alignItems="center"
        p="5px"
      >
        <Box
          h="33px"
          display={"flex"}
          justifyContent="center"
          onClick={handleClick}
          cursor="pointer"
        >
          <Image width="17%" height="33px" src={creativeproxies} alt="logo" />
          <Text
            height="31px"
            fontWeight="600"
            fontSize="26px"
            lineHeight="31px"
            color="#111822"
          >
            CreativeProxies
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          padding="0px"
          gap="30px"
          pl="20px"
          pr="20px"
          width="50%"
          height="19px"
          opacity=" 0.9"
        >
          <Box>
            <Text
              height="19px"
              fontWeight="400"
              fontSize="16px"
              lineHeight="19px"
              color="#111822"
            >
              Pricing
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="0px"
            gap="8px"
            height="19px"
          >
            <Text
              height="19px"
              fontWeight="400"
              font-size="16px"
              lineHeight="19px"
              color="#111822"
              flex=" none"
            >
              Explore Tools
            </Text>
            <Image
              width="9.5px"
              height="5.5px"
              color="#111822"
              src={Icon}
              alt="logo"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="0px"
            gap="8px"
          >
            <Text
              height="19px"
              fontWeight="400"
              font-size="16px"
              lineHeight="19px"
              color="#111822"
            >
              Resources
            </Text>
            <Image
              width="9.5px"
              height="5.5px"
              color="#111822"
              src={Icon}
              alt="logo"
            />
          </Box>
          <Box>
            <Text
              height="19px"
              fontWeight="400"
              font-size="16px"
              lineHeight="19px"
              color="#111822"
            >
              FAQs
            </Text>
          </Box>
          <Box>
            <Text
              height="19px"
              fontWeight="400"
              font-size="16px"
              lineHeight="19px"
              color="#111822"
            >
              Blogs
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"center"}
          padding="0px"
          gap="5px"
          width="20%"
          // m="auto"
          height="19px"
        >
          <Image width="16px" height="16px" src={discord1} alt="discrd" />
          <Text
            height="19px"
            fontWeight="500"
            fontSize="16px"
            lineHeight="19px"
            color="#5865F2"
          >
            Join Discord
          </Text>
          <Text width="0px" height="31.5px" border="1px solid #D9D8D6"></Text>
          <Text
            height="19px"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            color="#111822"
          >
            Log in
          </Text>
        </Box>
        <Box
          padding="10px"
          width="10%"
          m="auto"
          height="39px"
          background="#077BFF"
          borderRadius="5px"
        >
          <Text
            height="19px"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            color="#FFFFFF"
          >
            Get Started
          </Text>
        </Box>
      </Flex>
      <Box height="0px" border="1px solid #D9D8D6"></Box>
    </Box>
  );
};

export default Navbar;
