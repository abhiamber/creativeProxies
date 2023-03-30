import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Icon } from "@chakra-ui/icons";
import { GiFrogPrince } from "react-icons/gi";
import Star from "../Image/Star.png";
import Ellipse from "../Image/Ellipse.png";
import right from "../Image/right.png";
import get1 from "../Image/get1.png";

const Main = () => {
  return (
    <Box w="80%" m="auto">
      <Box
        mb="2%"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        <Text mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>
          You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span>
        </Text>
        <Text
          w={["99%", "88%", "45%"]}
          m="auto"
          lineHeight={"21.6px"}
          fontSize={["14px", "16px", "18px"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        m="auto"
        justifyContent="center"
        alignItems={"center"}
        // p="10px"
        gap="20px"
      >
        <Box
          borderRadius={"5px"}
          border={"1px solid #1E1E1E1A"}
          w={["100%", "80%", "33%"]}
          bg="#1E1E1E03"
        >
          <Box display={"flex"} gap="80px">
            <Box p="26px 0 14px 28px">
              <Text
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                bg="#2E73E8"
                borderRadius={"10px"}
                color={"#FFFFFF"}
                border={"1px solid "}
                padding="10px"
                fontSize={"8px"}
                textAlign="justify"
              >
                V<span style={{ fontSize: "18px" }}>4</span>
              </Text>
              <Text mt="8px" fontWeight={"600"} fontSize={"20px"}>
                IPv4 Proxies
              </Text>
              <Text fontWeight={"400"} mt="8px">
                Static/Rotating
              </Text>
            </Box>
            <Box p="37px 40px 24px 0" lineHeight={"18px"} textAlign="justify">
              <Text fontWeight={"600"} fontSize="12px">
                FROM
              </Text>
              <Text>
                <span style={{ fontSize: "16px", color: "#077BFF" }}>
                  $4.75
                </span>
                /day
              </Text>
              <Text fontSize={"12px"}>OR</Text>
              <Text>
                <span style={{ fontSize: "16px", color: "#077BFF" }}>
                  $116.75
                </span>
                /mo
              </Text>
            </Box>
          </Box>
          <hr style={{ width: "25%", margin: "auto", color: "#25CD08" }} />
          <Box
            pl="28px"
            fontWeight={"400"}
            mt="14px"
            lineHeight={"28.2px"}
            mb="21px"
          >
            <Text mb="10px" textAlign={"justify"}>
              Plan Includes :
            </Text>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">100 Threads</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Dedicated IP Pool</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Residential Proxy</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Unlimited Bandwidth</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Worldwide Locations</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
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
              w={"83%"}
              h="47px"
            >
              View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} />
            </Button>
          </Box>
        </Box>

        <Box
          mt="2.8%"
          borderRadius={"5px"}
          border={"1px solid #16D113"}
          // h="495px"
          w={["100%", "80%", "33%"]}
          bg="#16D1131A"
          textAlign={"justify"}
        >
          <Box display={"flex"} gap="80px">
            <Box p="26px 0 14px 28px">
              <Text
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
                <span style={{ fontSize: "16px", color: "#16D113" }}>
                  $4.75
                </span>
                /day
              </Text>
              <Text fontSize={"12px"}>OR</Text>
              <Text>
                <span style={{ fontSize: "16px", color: "#16D113" }}>
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
                src={right}
                alt="right"
              />
              <Text mt="-4px">100 Threads</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Dedicated IP Pool</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Residential Proxy</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Unlimited Bandwidth</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Worldwide Locations</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">Dedicated Subnets</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
                alt="right"
              />
              <Text mt="-4px">1 Octilion IPS</Text>
            </Box>
            <Box display={"flex"} gap="8px">
              <Img
                textAlign={"center"}
                w="12.5px"
                h="8.5px"
                src={right}
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
              w={"88%"}
              h="47px"
            >
              View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} />
            </Button>
          </Box>
        </Box>
      </Box>

      {/*  sellers data */}

      <Box
        borderRadius={"5px"}
        border={"1px solid #1E1E1E1A"}
        bg="#1E1E1E1A"
        display="flex"
        justifyContent={["center", "center", "start"]}
        alignItems="center"
        w={["100%", "100%", "68%"]}
        gap={["10px", "10px", "30px"]}
        p="20px"
        margin="auto"
        mt={"21px"}
      >
        <Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius="10px"
            textAlign={"justify"}
            bg="#FFDE2E"
            w={["65x", "35px", "35px"]}
            padding={"5px"}
            // m="auto"
            mb="5px"
          >
            {" "}
            <GiFrogPrince color="#FFFFFF" fontSize="23px" />
          </Box>
          <Box textAlign={"left"}>
            <Heading fontSize={["15px", "15px", "20px"]} fontWeight="600">
              Become a Reseller
            </Heading>
            <Text fontSize={"16px"} fontWeight="400">
              200+ Happy Resellers
            </Text>
          </Box>
        </Box>
        <Box>
          <Text mb="10px">Plan Includes :</Text>
          <Box display={"flex"} gap="10px" pt="5px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src={right}
              alt="right"
            />
            <Text mt="-8px">100 Threads</Text>
          </Box>
          <Box display={"flex"} gap="10px" pt="5px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src={right}
              alt="right"
            />
            <Text mt="-8px">Dedicated IP Pool</Text>
          </Box>
          <Box display={"flex"} gap="10px" pt="5px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src={right}
              alt="right"
            />
            <Text mt="-8px">Residential Proxy</Text>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} gap="10px" pt="5px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src={right}
              alt="right"
            />
            <Text mt="-8px">Dedicated IP Pool</Text>
          </Box>
          <Box display={"flex"} gap="10px" pt="5px">
            <Img
              textAlign={"center"}
              w="12.5px"
              h="8.5px"
              src={right}
              alt="right"
            />
            <Text mt="-8px">Residential Proxy</Text>
          </Box>
        </Box>
      </Box>

      {/* customer lover   */}
      <Box
        mt="8.5%"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
        mb="34px"
      >
        <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>
          Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies
        </Heading>
        <Text
          w={["100%", "100%", "465px"]}
          lineHeight={"21.6px"}
          fontSize={"18px"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </Box>

      {/* review section   */}
      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent={"center"}
        gap={"17px"}
        textAlign="left"
      >
        <Box
          border={"1px solid #16D11380"}
          borderRadius="5px"
          bg="#1E1E1E03"
          w={["88%", "60%", "32%"]}
          m="auto"
          // h="248px"
        >
          <Box p="29px 0 32.1px 25px">
            <Box display={"flex"}>
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
            </Box>
            <Text
              mt="19.1px"
              // w={"335px"} h="88px"
            >
              “Integer facilisis metus magna, non eleifend est ultricies sit
              amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante
              auctor velit, quis convallis tor et tellus.”
            </Text>
            <Box mt="12px" display={"flex"} gap="10px">
              <Img w="48px" h="48px" src={Ellipse} alt="profile" />
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
          w={["88%", "60%", "32%"]}
          // h="248px"
        >
          <Box p="29px 0 32.1px 25px">
            <Box display={"flex"}>
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
            </Box>
            <Text
              mt="19.1px"
              // w={"335px"} h="88px"
            >
              “Integer facilisis metus magna, non eleifend est ultricies sit
              amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante
              auctor velit, quis convallis tor et tellus.”
            </Text>
            <Box mt="12px" display={"flex"} gap="10px">
              <Img w="48px" h="48px" src={Ellipse} alt="profile" />

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
          w={["88%", "60%", "32%"]}
          // h="248px"
        >
          <Box p="29px 0 32.1px 25px">
            <Box display={"flex"}>
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
              <Img w={"23.8px"} h="23.8px" src={Star} alt="star" />
            </Box>
            <Text
              mt="19.1px"
              // w={"335px"} h="88px"
            >
              “Integer facilisis metus magna, non eleifend est ultricies sit
              amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante
              auctor velit, quis convallis tor et tellus.”
            </Text>
            <Box mt="12px" display={"flex"} gap="10px">
              <Img w="48px" h="48px" src={Ellipse} alt="profile" />

              <Box fontWeight={"400"}>
                <Heading fontSize={"18px"}>ECHO DZNS</Heading>
                <Text>Web Designer, CreativeProxies</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*    empty box part start    */}
      <Box
        bg="#F6FAFF"
        borderRadius={"5px"}
        border="1px solid #1E1E1E1A"
        mb="10%"
        mt={"11%"}
      >
        <Box
          // p="65px 40px 35px 40px"

          alignItems="center"
          mt="40px"
        >
          <Text mb="10px" size="md" lineHeight={"43.2px"} fontSize={"36px"}>
            Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog
          </Text>
          <Text
            w={["100%", "96%", "46%"]}
            m="auto"
            lineHeight={"21.6px"}
            fontSize={"18px"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </Text>
          <Text mt="10px" color={"#077BFF"}>
            Read All Blogs{" "}
            <Icon pt="15px" fontSize={"25px"} as={AiOutlineArrowRight} />
          </Text>
        </Box>
        {/*************   empty box section */}
        <Box
          p="30px"
          display={"grid"}
          gridTemplateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap="15px"
          m="auto"
          textAlign={"left"}
        >
          <Box w="100%">
            <Box
              w={"90%"}
              m="auto"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Box>
              <Box pl={["35px", "35px", "18px"]}>
                <Heading mt="11px" fontSize={["15px", "15px", "20px"]}>
                  Blog Title appear here
                </Heading>
                <Text color={"#111822"} mt="1px">
                  Category name here
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              w={"90%"}
              m="auto"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Box pl={["35px", "35px", "18px"]}>
              <Heading mt="11px" fontSize={["15px", "15px", "20px"]}>
                Blog Title appear here
              </Heading>
              <Text color={"#111822"} mt="1px">
                Category name here
              </Text>
            </Box>
          </Box>
          <Box>
            <Box
              w={"90%"}
              m="auto"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>

            <Box pl={["35px", "35px", "18px"]}>
              <Heading mt="11px" fontSize={["15px", "15px", "20px"]}>
                Blog Title appear here
              </Heading>
              <Text color={"#111822"} mt="1px">
                Category name here
              </Text>
            </Box>
          </Box>
          <Box>
            <Box
              w={"90%"}
              m="auto"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Box pl={["35px", "35px", "18px"]}>
              <Heading mt="11px" fontSize={["15px", "15px", "20px"]}>
                Blog Title appear here
              </Heading>
              <Text color={"#111822"} mt="1px">
                Category name here
              </Text>
            </Box>
          </Box>
          <Box display={{ lg: "block", md: "none", sm: "none", base: "none" }}>
            <Box
              w={"90%"}
              m="auto"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Box pl={["35px", "35px", "18px"]}>
              <Heading mt="11px" fontSize={["15px", "15px", "20px"]}>
                Blog Title appear here
              </Heading>
              <Text color={"#111822"} mt="1px">
                Category name here
              </Text>
            </Box>
          </Box>
          <Box display={{ lg: "block", md: "none", sm: "none", base: "none" }}>
            <Box
              w={"90%"}
              m="auto"
              h="221px"
              bg="#077BFF1A"
              border={"1px solid #077BFF80"}
              borderRadius="5px"
            ></Box>
            <Box pl={["35px", "35px", "18px"]}>
              <Heading mt="11px" fontSize={["15px", "15px", "20px"]}>
                Blog Title appear here
              </Heading>
              <Text color={"#111822"} mt="1px">
                Category name here
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
