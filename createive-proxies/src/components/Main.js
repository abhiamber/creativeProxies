import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Icon } from "@chakra-ui/icons";
import { GiFrogPrince } from "react-icons/gi";

const Main = () => {
  return (
    <Box>
      <Box
        mb="79px"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>
          You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span>
        </Heading>
        <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </Box>

      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap="20px"
      >
        <Box
          borderRadius={"5px"}
          border={"1px solid #1E1E1E1A"}
          h={"447px"}
          w="344px"
          bg="#1E1E1E03"
        >
          <Box display={"flex"} gap="80px">
            <Box p="26px 0 14px 28px">
              <Text
                w="40px"
                h="35px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                bg="#2E73E8"
                borderRadius={"10px"}
                color={"#FFFFFF"}
                border={"1px solid "}
                padding="10px"
                fontSize={"8px"}
              >
                V<span style={{ fontSize: "18px" }}>4</span>
              </Text>
              <Heading mt="8px" fontWeight={"600"} fontSize={"20px"}>
                IPv4 Proxies
              </Heading>
              <Text fontWeight={"400"} mt="8px">
                Static/Rotating
              </Text>
            </Box>
            <Box p="37px 40px 24px 0" lineHeight={"18px"}>
              <Text fontWeight={"600"} fontSize="12px">
                FROM
              </Text>
              <Text>
                <span style={{ fontSize: "18px", color: "#077BFF" }}>
                  $4.75
                </span>
                /day
              </Text>
              <Text fontSize={"12px"}>OR</Text>
              <Text>
                <span style={{ fontSize: "18px", color: "#077BFF" }}>
                  $116.75
                </span>
                /mo
              </Text>
            </Box>
          </Box>
          <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />
          <Box
            pl="28px"
            fontWeight={"400"}
            mt="14px"
            lineHeight={"28.2px"}
            mb="21px"
          >
            <Text mb="10px">Plan Includes :</Text>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">100 Threads</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Dedicated IP Pool</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Residential Proxy</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Unlimited Bandwidth</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Worldwide Locations</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">40 GBps</Text>
            </Box>
          </Box>
          <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />
          <Box>
            <Button
              m="16px 24px 27px 25px"
              fontSize={"18px"}
              fontWeight="600"
              color={"#FFFFFF"}
              bg="#077BFF"
              borderRadius={"5px"}
              w={"295px"}
              h="47px"
            >
              View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} />
            </Button>
          </Box>
        </Box>

        <Box
          mt="40px"
          borderRadius={"5px"}
          border={"1px solid #16D113"}
          h="495px"
          w="344px"
          bg="#16D1131A"
        >
          <Box display={"flex"} gap="80px">
            <Box p="26px 0 14px 28px">
              <Text
                w="40px"
                h="35px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                bg="#25CD08"
                borderRadius={"10px"}
                color={"#FFFFFF"}
                border={"1px solid "}
                padding="10px"
                fontSize={"8px"}
              >
                V<span style={{ fontSize: "18px" }}>6</span>
              </Text>
              <Heading mt="8px" fontWeight={"600"} fontSize={"20px"}>
                IPv4 Proxies
              </Heading>
              <Text fontWeight={"400"} mt="8px">
                Static/Rotating
              </Text>
            </Box>
            <Box p="37px 40px 24px 0" lineHeight={"18px"}>
              <Text fontWeight={"600"} fontSize="12px">
                FROM
              </Text>
              <Text>
                <span style={{ fontSize: "18px", color: "#16D113" }}>
                  $4.75
                </span>
                /day
              </Text>
              <Text fontSize={"12px"}>OR</Text>
              <Text>
                <span style={{ fontSize: "18px", color: "#16D113" }}>
                  $116.75
                </span>
                /mo
              </Text>
            </Box>
          </Box>
          <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />
          <Box
            pl="28px"
            fontWeight={"400"}
            mt="14px"
            lineHeight={"28.2px"}
            mb="21px"
          >
            <Text mb="10px">Plan Includes :</Text>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">100 Threads</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Dedicated IP Pool</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Residential Proxy</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Unlimited Bandwidth</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right.png"
                alt="right"
              />
              <Text mt="-4px">Worldwide Locations</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right1.png"
                alt="right"
              />
              <Text mt="-4px">Dedicated Subnets</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right1.png"
                alt="right"
              />
              <Text mt="-4px">1 Octilion IPS</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src="./Images/right1.png"
                alt="right"
              />
              <Text mt="-4px">Septiltion per Location</Text>
            </Box>
          </Box>
          <hr style={{ width: "295px", margin: "auto", color: "#D9D8D6" }} />
          <Box>
            <Button
              m="16px 24px 27px 25px"
              fontSize={"18px"}
              fontWeight="600"
              color={"#FFFFFF"}
              bg="#2CE517"
              borderRadius={"5px"}
              w={"295px"}
              h="47px"
            >
              View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        borderRadius={"5px"}
        border={"1px solid #1E1E1E1A"}
        bg="#1E1E1E1A"
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        w="708px"
        h="142px"
        gap={"34px"}
        margin="auto"
        mt={"21px"}
      >
        <Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius="10px"
            bg="#FFDE2E"
            w="35px"
            padding={"5px"}
          >
            <GiFrogPrince color="#FFFFFF" fontSize="23px" />
          </Box>
          <Heading fontSize={"20px"} fontWeight="600">
            Become a Reseller
          </Heading>
          <Text fontSize={"16px"} fontWeight="400">
            200+ Happy Resellers
          </Text>
        </Box>
        <Box>
          <Text mb="10px">Plan Includes :</Text>
          <Box display={"flex"} gap="8px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src="./Images/right.png"
              alt="right"
            />
            <Text mt="-4px">100 Threads</Text>
          </Box>
          <Box display={"flex"} gap="8px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src="./Images/right.png"
              alt="right"
            />
            <Text mt="-4px">Dedicated IP Pool</Text>
          </Box>
          <Box display={"flex"} gap="8px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src="./Images/right.png"
              alt="right"
            />
            <Text mt="-4px">Residential Proxy</Text>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} gap="8px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src="./Images/right.png"
              alt="right"
            />
            <Text mt="-4px">Dedicated IP Pool</Text>
          </Box>
          <Box display={"flex"} gap="8px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src="./Images/right.png"
              alt="right"
            />
            <Text mt="-4px">Residential Proxy</Text>
          </Box>
        </Box>
      </Box>

      <Box
        mt="180px"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
        mb="34px"
      >
        <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>
          Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies
        </Heading>
        <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </Box>

      <Box display={"flex"} w="1160px" m="auto" gap={"17px"}>
        <Box
          border={"1px solid #16D11380"}
          borderRadius="5px"
          bg="#1E1E1E03"
          w="386px"
          h="248px"
        >
          <Box p="29px 0 32.1px 25px">
            <Box display={"flex"}>
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
            </Box>
            <Text mt="19.1px" w={"335px"} h="88px">
              “Integer facilisis metus magna, non eleifend est ultricies sit
              amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante
              auctor velit, quis convallis tor et tellus.”
            </Text>
            <Box mt="12px" display={"flex"} gap="10px">
              <Img
                w="48px"
                h="48px"
                src="./Images/Ellipse 1.png"
                alt="profile"
              />
              <Box fontWeight={"400"}>
                <Heading fontSize={"18px"}>ECHO DZNS</Heading>
                <Text>Web Designer, CreativeProxies</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          border={"1px solid #16D11380"}
          borderRadius="5px"
          bg="#1E1E1E03"
          w="386px"
          h="248px"
        >
          <Box p="29px 0 32.1px 25px">
            <Box display={"flex"}>
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
            </Box>
            <Text mt="19.1px" w={"335px"} h="88px">
              “Integer facilisis metus magna, non eleifend est ultricies sit
              amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante
              auctor velit, quis convallis tor et tellus.”
            </Text>
            <Box mt="12px" display={"flex"} gap="10px">
              <Img
                w="48px"
                h="48px"
                src="./Images/Ellipse 1.png"
                alt="profile"
              />
              <Box fontWeight={"400"}>
                <Heading fontSize={"18px"}>John Doe</Heading>
                <Text>Random Text, ABC</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          border={"1px solid #16D11380"}
          borderRadius="5px"
          bg="#1E1E1E03"
          w="386px"
          h="248px"
        >
          <Box p="29px 0 32.1px 25px">
            <Box display={"flex"}>
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
              <Img w={"23.8px"} h="23.8px" src="./Images/Star.png" alt="star" />
            </Box>
            <Text mt="19.1px" w={"335px"} h="88px">
              “Integer facilisis metus magna, non eleifend est ultricies sit
              amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante
              auctor velit, quis convallis tor et tellus.”
            </Text>
            <Box mt="12px" display={"flex"} gap="10px">
              <Img
                w="48px"
                h="48px"
                src="./Images/Ellipse 1.png"
                alt="profile"
              />
              <Box fontWeight={"400"}>
                <Heading fontSize={"18px"}>ECHO DZNS</Heading>
                <Text>Web Designer, CreativeProxies</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        w="1192px"
        h="859px"
        bg="#F6FAFF"
        borderRadius={"5px"}
        border="1px solid #1E1E1E1A"
        m="auto"
        mb="120px"
        mt={"250px"}
      >
        <Box
          p="65px 40px 35px 40px"
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          alignItems="center"
        >
          <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>
            Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog
          </Heading>
          <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </Text>
          <Text mt="10px" color={"#077BFF"}>
            Read All Blogs <Icon as={AiOutlineArrowRight} />
          </Text>
        </Box>

        <Box
          p="0 40px"
          display={"grid"}
          gridTemplateColumns="repeat(3,1fr)"
          gap="25px"
        >
          <Box>
            <Box
              w="354px"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Heading mt="11px" fontSize={"20px"}>
              Blog Title appear here
            </Heading>
            <Text color={"#111822"} mt="1px">
              Category name here
            </Text>
          </Box>
          <Box>
            <Box
              w="354px"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Heading mt="11px" fontSize={"20px"}>
              Blog Title appear here
            </Heading>
            <Text color={"#111822"} mt="1px">
              Category name here
            </Text>
          </Box>
          <Box>
            <Box
              w="354px"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Heading mt="11px" fontSize={"20px"}>
              Blog Title appear here
            </Heading>
            <Text color={"#111822"} mt="1px">
              Category name here
            </Text>
          </Box>
          <Box>
            <Box
              w="354px"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Heading mt="11px" fontSize={"20px"}>
              Blog Title appear here
            </Heading>
            <Text color={"#111822"} mt="1px">
              Category name here
            </Text>
          </Box>
          <Box>
            <Box
              w="354px"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Heading mt="11px" fontSize={"20px"}>
              Blog Title appear here
            </Heading>
            <Text color={"#111822"} mt="1px">
              Category name here
            </Text>
          </Box>
          <Box>
            <Box
              w="354px"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Heading mt="11px" fontSize={"20px"}>
              Blog Title appear here
            </Heading>
            <Text color={"#111822"} mt="1px">
              Category name here
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
