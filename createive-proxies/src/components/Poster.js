import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import people from "../Image/people.png";

const data = [
  {
    title: "Feature No 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
  {
    title: "Feature No 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.",
    image: people,
  },
];

const Poster = () => {
  return (
    <Box w="80%" m="auto" p="20px" pt="80px" pb="80px">
      <Text
        textAlign={"center"}
        fontWeight="600"
        fontSize={["26px", "26px", "36px"]}
        lineHeight="43px"
        color="#FFFFFF"
        w={["95%", "95%", "55%"]}
        m="auto"
      >
        Why we are the Best Proxy Providers
      </Text>

      <Text
        w={["80%", "80%", "35%"]}
        lineHeight={"22px"}
        fontWeight="500"
        color="#FFFFFF"
        fontSize={"18px"}
        opacity="0.5"
        m="auto"
        mt="10px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <Box
        display={"grid"}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
        ]}
        gap="5"
        mt="2%"
      >
        {data.map((item, index) => {
          return (
            <Box
              background="rgba(255, 255, 255, 0.03)"
              border="1px solid rgba(255, 255, 255, 0.25)"
              borderRadius="5px"
              p={["15px", "15px", "20px"]}
              textAlign={"justify"}
              key={index}
            >
              <Image src={item?.image} alt="" />
              <Text
                fontWeight="600"
                fontSize={["16px", "16px", "20px"]}
                lineHeight="24px"
                color="#FFFFFF"
                pt="5px"
                pb="5px"
              >
                {item?.title}
              </Text>
              <Text
                fontWeight="400"
                fontSize="14px"
                lineHeight="17px"
                opacity={"0.5"}
                color="#FFFFFF"
              >
                {item?.description}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Poster;
