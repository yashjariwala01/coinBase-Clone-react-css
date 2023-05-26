import { HStack, Image, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box
      zIndex={"1"}
      p={"4"}
      w={"100%"}
      shadow={"base"}
      bgColor={"Background"}
      position={"fixed"}
    >
      <HStack maxW={"1300px"} justifyContent={"space-between"}>
        <Box>
          <Image
            w={"25%"}
            src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
          />
        </Box>
        <Box>
          <ul className="dropdown">
            <Box display={"flex"} gap={"30px"}>
            <li>Explore</li>
            <li>Web3</li>
            <li>Learn</li>
            <li>Individual</li>
            <li>Businesses</li>
            <li>Company</li>

            </Box>
            <Box className="dropdown-content1">
              <Box
                display={"flex"}
                gap={"10px"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Box display={"flex"} gap={"10px"}>
                  <Image
                    w={"50px"}
                    height={"50px"}
                    src="https://images.ctfassets.net/c5bd0wqjc7v0/2jaq2lDZhtxo16FOlRvRbu/fce2cf12493d2b8146a09df10dedd901/chart-0.svg"
                  />
                  <Box>
                    <Heading fontWeight={"500"} fontSize={"xl"}>
                      Crypto
                    </Heading>
                    <Text>View crypto prices and chart</Text>
                  </Box>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                  <Image
                    w={"50px"}
                    height={"50px"}
                    src="https://images.ctfassets.net/c5bd0wqjc7v0/4oZULOcKHY1JHPxHf1b8EC/ef5c707eef45d2c4d86e20d9ab217edd/decentralizedIdentity-0.svg"
                  />
                  <Box>
                    <Heading fontWeight={"500"} fontSize={"xl"}>
                      ENS Profiles
                    </Heading>
                    <Text>Build your web3 presence today</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* 1st end */}
          </ul>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <Heading fontSize={"md"}>Sign in</Heading>
            <Button colorScheme="blue" borderRadius={"0% 20%"}>Get Started</Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;

// import { Button, HStack } from "@chakra-ui/react";
// import React from "react";
// import { Image } from "@chakra-ui/react";
// // import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
//       <Button size={} variant={"unstyled"} color={"white"}>
//         <Image src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"/>
//       </Button>
//       <Button variant={"unstyled"} color={"white"}>
//         {/* <Link to="/exchanges">Exchanges</Link> */}
//       </Button>
//       <Button variant={"unstyled"} color={"white"}>
//         {/* <Link to="/coins">Coins</Link> */}
//       </Button>
//     </HStack>
//   );
// };

// export default Header;
