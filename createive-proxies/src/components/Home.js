import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import get1 from "../Image/get1.png";
import Frame6 from "../Image/Frame6.png";
import Frame7 from "../Image/Frame7.png";
import square from "../Image/square.png";
const Home = () => {
  let navigate = useNavigate();

  let handleClick = () => {
    navigate("/location");
  };
  return (
    <Box fontFamily="Figtree" fontStyle="normal" letterSpacing="-0.02em">
      <Box
        fontWeight="600"
        fontSize="16px"
        lineHeight="19px"
        textAlign="center"
        color="#111822"
        mt="5%"
        opacity={"0.5"}
      >
        WELCOME TO THE CREATIVE PROXIES
      </Box>
      <Box
        w="68%"
        textAlign={"center"}
        m="auto"
        fontWeight="600"
        fontSize="56px"
        lineHeight="67px"
        color="#111822"
        // display={"flex"}
      >
        <Text display={"inline"}>We are the </Text>
        <Text display={"inline"} color="#077BFF">
          Fastest
        </Text>
        <Text display={"inline"}> and the </Text>
        <Text display={"inline"} color="#16D113">
          {" "}
          Most{" "}
        </Text>

        <Text display={"inline"} color="#16D113">
          Reliable{" "}
        </Text>
        <Text display={"inline"}>Proxy Service since 2020</Text>
      </Box>

      <Box
        w="33%"
        textAlign={"center"}
        m="auto"
        fontWeight="500"
        fontSize="22px"
        color="#111822"
        opacity={"0.5"}
        mt="13px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Box>
      <Box
        backgroundColor="#077BFF"
        w="12%"
        h="47px"
        p="10px"
        justifyContent={"center"}
        alignItems="center"
        m="auto"
        gap="5px"
        display={"flex"}
        mt="26px"
        textAlign="center"
        borderRadius="10px"
        onClick={handleClick}
        cursor="pointer"
      >
        <Text
          textAlign={"center"}
          h="22px"
          m="auto"
          fontWeight="600"
          fontSize="18px"
          lineHeight="22px"
          color="#FFFFFF"
        >
          Get Started
        </Text>
        <Image width="13px" height="9.5px" src={get1} alt="arrow" />
      </Box>

      <Box
        background="rgba(0, 182, 122, 0.1)"
        borderRadius="10px"
        textAlign={"center"}
        w="15%"
        m="auto"
        mt="27px"
        h="90px"
        p="20px"
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
        // gap="6"
      >
        <Image src={Frame7} alt="" />
        <Image src={Frame6} alt="" />
      </Box>
      <Text
        width="32%"
        height="0px"
        border="1px solid #D9D8D6"
        m="auto"
        mt="54px"
      ></Text>

      <Box w="80%" gap="4" m="auto" mt="35px" display={"flex"}>
        <Box
          background=" #EEFEFD"
          border="1px solid #D4EAE8"
          borderRadius="5px"
          display={"flex"}
          alignItems="center"
          w="80%"
          pl="24px"
          pr="20px"
          // transform="matrix(1, 0, 0, -1, 0, 0)"
          boxSizing="border-box"
          h="96px"
        >
          <Image
            w="25%"
            h="40px"
            src={square}
            alt=""
            background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
            borderRadius="8px"
          />
          <Box
            color="#111822"
            opacity="0.8"
            textAlign={"justify"}
            pl="8px"
            fontWeight="400"
            fontSize="18px"
            lineHeight="22px"
          >
            <Text> Lorem Ipsum</Text>
            <Text>Dolor Sit Amet Top</Text>
          </Box>
        </Box>
        <Box
          background=" #EEFEFD"
          border="1px solid #D4EAE8"
          borderRadius="5px"
          display={"flex"}
          alignItems="center"
          w="80%"
          pl="24px"
          pr="20px"
          // transform="matrix(1, 0, 0, -1, 0, 0)"
          boxSizing="border-box"
          h="96px"
        >
          <Image
            w="25%"
            h="40px"
            src={square}
            alt=""
            background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
            borderRadius="8px"
          />
          <Box
            color="#111822"
            opacity="0.8"
            textAlign={"justify"}
            pl="8px"
            fontWeight="400"
            fontSize="18px"
            lineHeight="22px"
          >
            <Text> Lorem Ipsum</Text>
            <Text>Dolor Sit Amet Top</Text>
          </Box>
        </Box>

        <Box
          background=" #EEFEFD"
          border="1px solid #D4EAE8"
          borderRadius="5px"
          display={"flex"}
          alignItems="center"
          w="80%"
          pl="24px"
          pr="20px"
          // transform="matrix(1, 0, 0, -1, 0, 0)"
          boxSizing="border-box"
          h="96px"
        >
          <Image
            w="25%"
            h="40px"
            src={square}
            alt=""
            background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
            borderRadius="8px"
          />
          <Box
            color="#111822"
            opacity="0.8"
            textAlign={"justify"}
            pl="8px"
            fontWeight="400"
            fontSize="18px"
            lineHeight="22px"
          >
            <Text> Lorem Ipsum</Text>
            <Text>Dolor Sit Amet Top</Text>
          </Box>
        </Box>

        <Box
          background=" #EEFEFD"
          border="1px solid #D4EAE8"
          borderRadius="5px"
          display={"flex"}
          alignItems="center"
          w="80%"
          pl="24px"
          pr="20px"
          // transform="matrix(1, 0, 0, -1, 0, 0)"
          boxSizing="border-box"
          h="96px"
        >
          <Image
            w="25%"
            h="40px"
            src={square}
            alt=""
            background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
            borderRadius="8px"
          />
          <Box
            color="#111822"
            opacity="0.8"
            textAlign={"justify"}
            pl="8px"
            fontWeight="400"
            fontSize="18px"
            lineHeight="22px"
          >
            <Text> Lorem Ipsum</Text>
            <Text>Dolor Sit Amet Top</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
