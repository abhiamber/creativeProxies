import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import creativeproxies from "../Image/creativeproxies.png";
import Icon from "../Image/Icon.png";
import discord1 from "../Image/discord1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

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
      <Flex
        display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
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
          <Image width="20%" height="33px" src={creativeproxies} alt="logo" />
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
