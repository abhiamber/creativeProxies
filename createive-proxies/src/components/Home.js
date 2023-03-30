import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import get1 from "../Image/get1.png";
import Frame6 from "../Image/Frame6.png";
import Frame7 from "../Image/Frame7.png";
import square from "../Image/square.png";
import lock from "../Image/lock.png";
import dollar from "../Image/dollar.png";
import security from "../Image/security.png";

const data = [
  {
    title: "Lorem Ipsun",
    description: "Dolor Sit Amet Top",
    image: square,
    background: "linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)",
  },
  {
    title: "Lorem Ipsun",
    description: "Dolor Sit Amet Top",
    image: lock,
    background: "linear-gradient(135deg, #72E6E5 0%, #75DFF0 100%)",
  },
  {
    title: "Lorem Ipsun",
    description: "Dolor Sit Amet Top",
    image: dollar,
    background: "linear-gradient(135deg, #80FC6A 0%, #41F064 100%)",
  },
  {
    title: "Lorem Ipsun",
    description: "Dolor Sit Amet Top",
    image: security,
    background: "linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)",
  },
];

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
        mt={["100px", "100px", "95px"]}
        opacity={"0.5"}
      >
        WELCOME TO THE CREATIVE PROXIES
      </Box>

      <Box
        w={["88%", "88%", "68%"]}
        textAlign={"center"}
        m="auto"
        fontWeight="600"
        fontSize={["36px", "36px", "56px"]}
        lineHeight={["40px", "40px", "67px"]}
        color="#111822"
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
        w={["78%", "78%", "33%"]}
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
        w={["222px", "222px", "222px"]}
        h={["43px", "43px", "47px"]}
        m="auto"
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        mt="26px"
        gap="2"
        textAlign="center"
        borderRadius="10px"
        onClick={handleClick}
        cursor="pointer"
      >
        <Text
          textAlign={"center"}
          h="22px"
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
        w="222px"
        m="auto"
        mt="20px"
        h={["80px", "80px", "90px"]}
        p="20px"
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
      >
        <Image src={Frame7} alt="" />
        <Image src={Frame6} alt="" />
      </Box>

      <Text
        width="32%"
        height="0px"
        border="1px solid #D9D8D6"
        m="auto"
        mt={["35px", "35px", "45px"]}
      ></Text>

      <Box
        w="80%"
        gap="4"
        m="auto"
        mt="35px"
        display={"grid"}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
        ]}
      >
        {data.map((item, index) => {
          return (
            <Box
              background=" #EEFEFD"
              border="1px solid #D4EAE8"
              borderRadius="5px"
              display={"flex"}
              alignItems="center"
              justifyContent={"space-around"}
              w="100%"
              boxSizing="border-box"
              h="96px"
            >
              <Image
                w={["15%", "15%", "15%"]}
                h={["30px", "30px", "38px"]}
                src={item?.image}
                alt={item?.image}
                background={item?.background}
                borderRadius="8px"
                ml={["2px", "3px", "0px"]}
              />
              <Box
                color="#111822"
                opacity="0.8"
                textAlign={["center", "center", "justify"]}
                fontWeight="400"
                fontSize={["15px", "15px", "18px"]}
                lineHeight="22px"
              >
                <Text> {item?.title}</Text>
                <Text>{item?.description}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;
