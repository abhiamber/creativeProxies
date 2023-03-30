import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import creativeproxies from "../Image/creativeproxies.png";
import discord1 from "../Image/discord1.png";

const Footer = () => {
  return (
    <Box
      w="80%"
      m="auto"
      fontFamily="Figtree"
      fontStyle="normal"
      letterSpacing="-0.02em"
    >
      <Box h="0" mt="7%" mb="2%" border="1px solid #D9D8D6"></Box>

      <Box
        display={["block", "block", "grid"]}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
        ]}
        mb="2%"
        mt="1%"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box
          display={{ lg: "block", md: "flex", sm: "flex", base: "flex" }}
          justifyContent="space-between"
        >
          <Box>
            <Box display={"flex"} gap="7.42px">
              <Image
                w={["10%", "10%", "7%"]}
                src={creativeproxies}
                alt="logo"
              />
              <Text fontSize={["20px", "20px", "26px"]} fontWeight="600">
                CreativeProxies
              </Text>
            </Box>
            <Text
              fontSize={"14px"}
              fontWeight="400"
              color={"#111822"}
              lineHeight={"20px"}
              w={["75%", "75%", "68%"]}
              m="5px"
              textAlign={"justify"}
              mb="10px"
            >
              Copyright © 2023 Creative Proxies. All rights reserved.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={"center"}
            mt={["10px"]}
            padding="20px"
            width={["42%", "42%", "62%"]}
            background="rgba(88, 101, 242, 0.1)"
            border="1px solid #5865F2"
            borderRadius="10px"
            height="19px"
          >
            {" "}
            <Image w="10%" src={discord1} alt="surface1" />
            <Text
              fontWeight="500"
              fontSize="16px"
              lineHeight="19px"
              color="#5865F2"
              pl="8px"
            >
              Join Discord
            </Text>{" "}
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent="center"
          gap={["65px", "80px", "100px"]}
          mt={["15px", null, null]}
        >
          <Box>
            <Text
              color={"#111822"}
              textAlign="justify"
              fontSize={"14px"}
              fontWeight="600"
              opacity={0.25}
            >
              Explore
            </Text>
            <Box
              mt="10px"
              lineHeight={"24.2px"}
              fontWeight={"500"}
              fontSize={"16px"}
              textAlign="justify"
              opacity={0.75}
            >
              <Text>Proxy Location Checker</Text>
              <Text>IPv6 Comptability</Text>
              <Text>Blogs</Text>
            </Box>
          </Box>
          <Box>
            <Text
              opacity={0.25}
              color={"#111822"}
              fontSize={"14px"}
              fontWeight="600"
              textAlign="justify"
            >
              Resources
            </Text>
            <Box
              mt="10px"
              lineHeight={"24.2px"}
              fontWeight={"500"}
              fontSize={"16px"}
              opacity={0.75}
              textAlign="justify"
            >
              <Text>FAQs</Text>
              <Text>Branding</Text>
              <Text>Network Information</Text>
              <Text>Imprint</Text>
            </Box>
          </Box>
          <Box>
            <Text
              opacity={0.25}
              color={"#111822"}
              fontSize={"14px"}
              fontWeight="600"
              textAlign="justify"
            >
              Support
            </Text>
            <Box
              mt="10px"
              lineHeight={"24.2px"}
              fontWeight={"500"}
              fontSize={"16px"}
              opacity={0.75}
              textAlign="justify"
            >
              <Text>Status</Text>
              <Text>Terms of Service</Text>
              <Text>Privacy Policy</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
