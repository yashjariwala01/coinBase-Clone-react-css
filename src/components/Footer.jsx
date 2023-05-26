import { HStack, Heading, Text, Image, VStack, Box, Grid, GridItem} from "@chakra-ui/react";
import React from "react";
import { Select } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <HStack alignItems={"baseline"} mr={"50px"} ml={"-50px"}>
        <VStack m={"30px"}>
          <Image mb={"15px"} alignSelf={"center"} w={"25%"} h={"25%"} src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" />
          <Select w={"auto"}>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </Select>
          <Text>© 2023 Coinbase</Text>
          <ul>
            <li>
              <a href="https://www.coinbase.com/blog"> Blog</a>
            </li>
            <li>
              <a href="https://twitter.com/coinbase">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/Coinbase">Facebook</a>
            </li>
          </ul>
        </VStack>

        <Grid templateColumns="repeat(3, 1fr)" gridGap={"10rem"}>
          <GridItem >
            <VStack>
                <Box>
                    <Heading fontSize={"2xl"} m={"15px -30px"}>Company</Heading>
                    <ul >
                        <li>About</li>
                        <li>Careers</li>
                        <li>Affliliates</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Security</li>
                        <li>Investors</li>
                        <li>Vendors</li>
                        <li>Legal & privacy</li>
                        <li>Cookie policy</li>
                        <li>Digital Assets Disclosures</li>
                    </ul>
                </Box>
                <Box>
                <Heading fontSize={"2xl"} m={"15px -30px"}>Learn</Heading>
                    <ul>
                        <li>Ethereum Merge</li>
                        <li>Browse crypto prices</li>
                        <li>Coinbase Bytes newsletter</li>
                        <li>Crypto basics</li>
                        <li>Tips & tutorials</li>
                        <li>Market updates</li>
                        <li>What is Bitcoin?</li>
                        <li>What is crypto?</li>
                        <li>What is a blockchain?</li>
                        <li>How to set up a crypto wallet</li>
                        <li>How to send crypto</li>
                        <li>Taxes</li>
                    </ul>
                </Box>
            </VStack>
          </GridItem>

          <GridItem w="100%" h="10" >
          <VStack>
                <Box>
                    <Heading fontSize={"2xl"} m={"15px -30px"}>Individual</Heading>
                    <ul>
                    <li>Buy & sell</li>
                    <li>Wallet</li>
                    <li>NFT</li> 
                    </ul>
                    <Heading fontSize={"2xl"} m={"15px -30px"}>Businesses</Heading>
                    <ul>
                        <li>Institutional</li>
                        <li>Prime</li>
                        <li>Asset Hub</li>
                        <li>Commerce</li>
                    </ul>  
                    <Heading fontSize={"2xl"} m={"15px -30px"}>Developers</Heading>
                    <ul>
                        <li>Cloud</li>
                        <li>Wallet as a Service</li>
                        <li>Wallet SDK</li>
                        <li>Coinbase Wallet Fa</li>
                        <li>Coinbase Pay SDK</li>
                        <li>Node</li>
                        <li>Commerce</li>
                        <li>Base</li>
                        <li>Sign in with Coinbase</li>
                        <li>Rosetta</li>
                        <li>Participate</li>
                        <li>Prime API</li>
                    </ul>                
                </Box>
            </VStack>
          </GridItem>

          <GridItem w="100%" h="10" ><VStack>
                <Box>
                    <Heading fontSize={"2xl"} m={"15px -30px"}>Support</Heading>
                    <ul>
                        <li>Help center</li>
                        <li>Contact us</li>
                        <li>Create account</li>
                        <li>ID verification</li>
                        <li>PrAccount informationess</li>
                        <li>Payment methods</li>
                        <li>Account access</li>
                        <li>Supported crypto</li>
                        <li>Supported countries</li>
                        <li>Status</li>
                        <li>Digital Assets Disclosures</li>
                    </ul>
                </Box>
            </VStack>
            </GridItem>                    
        </Grid>
        <HStack>
          <></>
          <></>
          <></>
        </HStack>
      </HStack>
    </div>
  );
};

export default Footer;
