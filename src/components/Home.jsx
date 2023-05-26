import React from "react";
import {
  Container,
  Box,
  Text,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Image,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
  return (
    <>
      <Header/>
      <Box
        as="main"
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box
          as="section"
          w={"80%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Box display={"flex"} flexDirection={"column"} w={"50%"}>
              <Box alignItems={"center"} cursor={"pointer"} display={"flex"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="HeroPill__NakedBitcoinIcon-sc-16ndsef-1 epDkoW"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#1652F0"
                  ></path>
                  <path
                    d="M17.274 10.5149C17.5095 8.94294 16.3118 8.09769 14.6753 7.53369L15.2063 5.40369L13.9103 5.08119L13.3928 7.15494C13.0523 7.06944 12.7028 6.98994 12.354 6.91044L12.8753 4.82319L11.5793 4.49994L11.0483 6.62919C10.7663 6.56469 10.4888 6.50169 10.2203 6.43419L10.2218 6.42744L8.43375 5.98119L8.08875 7.36569C8.08875 7.36569 9.051 7.58619 9.03075 7.59969C9.55575 7.73094 9.65025 8.07819 9.6345 8.35419L9.03 10.7804C9.066 10.7894 9.1125 10.8029 9.165 10.8232L9.02775 10.7894L8.18025 14.1884C8.11575 14.3474 7.953 14.5867 7.5855 14.4959C7.599 14.5147 6.6435 14.2612 6.6435 14.2612L6 15.7447L7.6875 16.1654C8.001 16.2442 8.3085 16.3267 8.61075 16.4039L8.0745 18.5579L9.36975 18.8804L9.90075 16.7504C10.2548 16.8457 10.5983 16.9342 10.9343 17.0182L10.4047 19.1392L11.7008 19.4617L12.237 17.3122C14.448 17.7307 16.11 17.5619 16.8098 15.5624C17.3738 13.9529 16.782 13.0237 15.6188 12.4184C16.4663 12.2234 17.1038 11.6662 17.274 10.5149ZM14.3115 14.6684C13.9118 16.2787 11.2005 15.4079 10.3215 15.1897L11.034 12.3359C11.913 12.5557 14.7308 12.9899 14.3115 14.6684ZM14.7128 10.4917C14.3475 11.9564 12.0915 11.2117 11.3603 11.0294L12.0053 8.44194C12.7365 8.62419 15.0938 8.96394 14.7128 10.4917Z"
                    fill="white"
                  ></path>
                </svg>
                <Text color={"blue"} fontWeight={"550"} margin={"3px"}>
                  Jump start your portfolio
                </Text>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="HeroPill__StyledIncentiveArrow-sc-16ndsef-0 jPcHaN"
                >
                  <path
                    d="M4.10013e-07 6.99994L12.17 6.99994L8.89 10.2799L10.3 11.6899L16 5.99994L10.3 0.309942L8.89 1.71994L12.17 4.99994L5.84858e-07 4.99994L4.10013e-07 6.99994Z"
                    fill="#1652F0"
                  ></path>
                </svg>
              </Box>
              <Heading fontSize={"6xl"} mb={"20px"}>
                Jump start your crypto portfolio
              </Heading>
              <Text fontWeight={600} mb={"20px"}>
                {" "}
                Coinbase is the easiest place to buy and sell cryptocurrency.
                Sign up and get started today.
              </Text>
              <Box display={"flex"}>
                <Input placeholder="Email address" mr={"10px"} p={"25px"} />
                <Button colorScheme="blue" color={"white"} p={"25px"}>
                  Get Started
                </Button>
              </Box>
            </Box>

            <Box display={"flex"}>
              <svg
                width="500"
                height="800"
                viewBox="0 0 680 956"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="HeroVariant__HeroIndiaImage-sc-1o7093z-7 efRURj"
              >
                <circle cx="340" cy="428" r="340" fill="#F1F5FE"></circle>
                <g filter="url(#prefix__filter0_dd)">
                  <path
                    d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z"
                    fill="url(#prefix__paint0_linear)"
                  ></path>
                  <path
                    d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z"
                    fill="url(#prefix__img1)"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="prefix__filter0_dd"
                    x="48"
                    y="0"
                    width="519"
                    height="956"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="-32" dy="50"></feOffset>
                    <feGaussianBlur stdDeviation="30"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="15"></feOffset>
                    <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend
                      in2="effect1_dropShadow"
                      result="effect2_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <pattern
                    id="prefix__img1"
                    patternUnits="objectBoundingBox"
                    width="1"
                    height="1"
                    viewBox="0 0 385 812"
                  >
                    <image
                      href="https://assets.coinbase.com/assets/india-mobile-app.6513d51a4d3e24c473353f194e3c54c4.svg"
                      width="375"
                      height="812"
                    ></image>
                  </pattern>
                </defs>
              </svg>
            </Box>
          </Box>
        </Box>
        {/* section ends */}
        <Box>
          <Box minW={"98.8vw"} minH={"300px"}>
            <Box bg={"black"} p={"50px"}>
              <HStack>
                <Image
                  mr={"30px"}
                  src="https://images.ctfassets.net/c5bd0wqjc7v0/2nmdMe3zBL8fgv3Ltvk6JD/068793dfeb8744955ed8794b97e0f9c5/image_26.png?fl=progressive&q=100&w=1180"
                  alt="circularImage"
                />
                <VStack ml={"10px"}>
                  <Heading
                    mt={"-16px"}
                    color={"white"}
                    fontWeight={"600"}
                    fontSize={"5xl"}
                  >
                    Explore web3 profiles, and claim one for free
                  </Heading>
                  <Text alignSelf={"start"} fontSize={"20px"} color={"white"}>
                    Create and customize your web3 profile, check out other
                    profiles, and <br />
                    explore popular NFT collections and tokens.
                  </Text>
                  <Button
                    p={"30px"}
                    alignSelf={"start"}
                    borderRadius={"25%"}
                    colorScheme="blue"
                  >
                    Learn More{" "}
                  </Button>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </Box>
        {/* black box section ends */}
        {/* Table section starts */}
        <Box>
          <Box>
            <TableContainer m={"50px"} w={"80vw"} border={"1px"} borderColor={"gray.300"} borderRadius={"1%"}>
              <Table size='lg' variant="simple">
                <Thead>
                  <Tr >
                    <Th >#</Th>  
                    <Th>Name</Th>
                    <Th isNumeric>Price</Th>
                    <Th isNumeric>Change </Th>
                    <Th>Chart</Th>
                    <Th>Trade</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr >
                    <Td>1</Td>
                    <Td>BitCoin BTC</Td>
                    <Td isNumeric>₹2,17,185.83 </Td>
                    <Td color={"green"}>+0.04%</Td>
                    <Td>Chart</Td>
                    <Td><Button  colorScheme="green">Buy</Button></Td>
                  </Tr>
                  <Tr >
                  <Td>2</Td>
                    <Td>Ethereum ETH</Td>
                    <Td isNumeric>₹148,185.83 </Td>
                    <Td color={"green"}>+0.54%</Td>
                    <Td>Chart</Td>
                    <Td><Button  colorScheme="green">Buy</Button></Td>
                  </Tr>
                  <Tr>
                  <Td>3</Td>
                    <Td>Cardano ADA</Td>
                    <Td isNumeric>₹27.83 </Td>
                    <Td color={"red"}>-1.04%</Td>
                    <Td>Chart</Td>
                    <Td><Button  colorScheme="green">Buy</Button></Td>
                  </Tr>
                  <Tr >
                  <Td>4</Td>
                    <Td>Solana SOL</Td>
                    <Td isNumeric>₹1594.83 </Td>
                    <Td color={"red"}>+0.65%</Td>
                    <Td>Chart</Td>
                    <Td><Button  colorScheme="green">Buy</Button></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        {/* table Ends here */}
        <Box as="section" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Box mb={"50px"}>
            <Heading mb={"20px"}>Create your cryptocurrency portfolio today</Heading>
            <Text textAlign={"center"} fontWeight={"500"}>Coinbase has a variety of features that make it the best place to start trading</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} w={"80%"}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} mt={"-70px"} mr={"20px"}>
              <Box  mt={"2rem"} display={"flex"} >
                <Box mr={'5%'}><svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M40 5.667a1 1 0 0 0-1-1h-6.667a2.213 2.213 0 0 0-1.588.808l-1.352 1.858H7.667A1.667 1.667 0 0 0 6 9v23.667h34v-27Z" fill="#CED2DB"></path><path d="m39.5 31.075-5-16.15a2.411 2.411 0 0 0-2.167-1.592H1.667c-.917 0-1.445.717-1.167 1.592L6 32.667h32.333c.917 0 1.445-.717 1.167-1.592Z" fill="#5DE2F8"></path><path d="m40 32.667-5.5-17.742a2.411 2.411 0 0 0-2.167-1.592H6v19.334h34ZM18.667 13.333l7.071-7.071a9.64 9.64 0 0 1 2.929 7.071h-10Z" fill="#0052FF"></path><path d="M18.667 3.333a9.64 9.64 0 0 0-7.072 2.929 9.64 9.64 0 0 0-2.928 7.071h10l7.071-7.071a9.64 9.64 0 0 0-7.071-2.929Z" fill="#FFD200"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.833 13.333a7.833 7.833 0 0 1 15.667 0H10.833Zm-.333 0a8.167 8.167 0 1 1 16.333 0h1.834a9.64 9.64 0 0 1-2.929 7.072 9.64 9.64 0 0 1-7.071 2.928 9.64 9.64 0 0 1-7.072-2.928 9.64 9.64 0 0 1-2.928-7.072H10.5Z" fill="#0A0B0D"></path></svg>
                </Box>
                <Box >
                  <Heading p={"10px"} fontSize={"lg"}> Manage Your Portfolio</Heading>
                  <Text p={"10px"} > Buy and sell popular digital currencies, keep track of them in the one place.</Text>
                </Box>
              </Box>
              <Box  mt={"2rem"} display={"flex"}>
              <Box mr={'7%'}><svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9994 0C9.10658 0 4.28516 4.64062 4.28516 11.3438V25.7812H25.7137V11.3438C25.7137 4.64062 20.8923 0 14.9994 0Z" fill="#D4EEFF"></path><path d="M30 12.375H0V33H30V12.375Z" fill="#56B4FC"></path><path d="M25.7137 12.375H4.28516V28.875H25.7137V12.375Z" fill="#1652F0"></path><path d="M14.9999 18.5625L17.8392 24.75H12.1606L14.9999 18.5625Z" fill="white"></path><path d="M15.0003 20.625C16.1837 20.625 17.1431 19.7016 17.1431 18.5625C17.1431 17.4234 16.1837 16.5 15.0003 16.5C13.8168 16.5 12.8574 17.4234 12.8574 18.5625C12.8574 19.7016 13.8168 20.625 15.0003 20.625Z" fill="white"></path></svg>
                </Box>
                <Box>
                  <Heading p={"10px"} fontSize={"lg"}>Vault protection</Heading>
                  <Text p={"10px"} > For added security, store your funds in a vault with time delayed withdrawals.</Text>
                </Box>
              </Box>
              <Box mt={"2rem"} display={"flex"}>
              <Box mr={'4%'}>
              <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.333 6c0-.368.299-.667.667-.667h17.333c.369 0 .667.299.667.667v28a.667.667 0 0 1-.667.667H6A.667.667 0 0 1 5.333 34V6Z" fill="#CED2DB"></path><path d="M24 9.333H5.333v21.334H24V9.333Z" fill="#0052FF"></path><path d="M12.667 32.667c0-.369.298-.667.666-.667H16a.667.667 0 0 1 0 1.333h-2.667a.667.667 0 0 1-.666-.666ZM15.333 7.333a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z" fill="#0A0B0D"></path><circle cx="25.333" cy="20" r="9.333" fill="#0A0B0D"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M24 29.239a9.333 9.333 0 1 0 0-18.478V29.24Z" fill="#CED2DB"></path><circle cx="25.333" cy="20" fill="#fff" r="8"></circle><path d="m25.333 16 1.113 2.812 2.887.244-2.2 1.981.672 2.963-2.472-1.588L22.861 24l.672-2.963-2.2-1.981 2.888-.244L25.333 16Z" fill="#0052FF"></path></svg>
              </Box>
                <Box>
                  <Heading p={"10px"} fontSize={"lg"}>Mobile apps</Heading>
                  <Text p={"10px"} > Stay on top of the markets with the Coinbase app for Android or iOS.</Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Image src="https://assets.coinbase.com/assets/1d3641c165a4bde5.jpg"/>
            </Box>
          </Box>
        </Box>
        {/* this section ends here */}
        {/* new section starts from here */}
        <VStack>
          <Box>
            <Heading>The most trusted cryptocurrency platform</Heading>
            <Text textAlign={"center"} mt={"10px"} fontWeight={"400"}>Here are a few reasons why you should choose Coinbase</Text>
          </Box>
          <HStack gap={"150px"} p={"50px"} justifyContent={"center"}>
            <Box gap={"10px"} p={"50px"} width={"35%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.1334 0H13.8667V10.6667H50.1334V0Z" fill="#5DE2F8"></path><path d="M49.4933 29.8667H14.5067H0V64H63.9733L64 29.8667H49.4933Z" fill="#CED2DB"></path><path d="M58.6667 29.8667C58.6667 15.1467 46.72 3.20001 32 3.20001C17.28 3.20001 5.33337 15.1467 5.33337 29.8667" fill="#CED2DB"></path><path d="M13.8667 29.8667H50.1334V10.32C45.3867 5.89335 39.0134 3.20001 32 3.20001C24.9867 3.20001 18.6134 5.89335 13.8667 10.32V29.8667Z" fill="#0052FF"></path><path d="M50.1334 29.8667C50.1334 19.84 42.0267 11.7333 32 11.7333C21.9734 11.7333 13.8667 19.84 13.8667 29.8667" fill="#5DE2F8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.33337 29.8667C9.33337 17.4536 19.4786 7.20001 32 7.20001C44.5215 7.20001 54.6667 17.4536 54.6667 29.8667H54.1334C54.1334 17.7465 44.2253 7.73335 32 7.73335C19.7748 7.73335 9.86671 17.7465 9.86671 29.8667H9.33337Z" fill="#0A0B0D"></path><path d="M50.1334 29.8667H13.8667V49.0667H50.1334V29.8667Z" fill="#0052FF"></path><path d="M32 14.9333C23.76 14.9333 17.0667 21.6267 17.0667 29.8667C17.0667 38.1067 23.76 44.8 32 44.8C40.24 44.8 46.9333 38.1067 46.9333 29.8667C46.9333 21.6267 40.24 14.9333 32 14.9333Z" fill="white"></path><path d="M19.2 29.8667C19.2 22.8 24.9333 17.0667 32 17.0667C39.0666 17.0667 44.7999 22.8 44.7999 29.8667H19.2Z" fill="#FFD200"></path><path d="M44.7999 29.8667C44.7999 36.9333 39.0666 42.6667 32 42.6667C24.9333 42.6667 19.2 36.9333 19.2 29.8667H44.7999Z" fill="#0052FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32 20.5333C26.8453 20.5333 22.6666 24.712 22.6666 29.8667C22.6666 35.0213 26.8453 39.2 32 39.2C37.1546 39.2 41.3333 35.0213 41.3333 29.8667C41.3333 24.712 37.1546 20.5333 32 20.5333ZM22.1333 29.8667C22.1333 24.4175 26.5508 20 32 20C37.4492 20 41.8666 24.4175 41.8666 29.8667C41.8666 35.3159 37.4492 39.7333 32 39.7333C26.5508 39.7333 22.1333 35.3159 22.1333 29.8667Z" fill="#0A0B0D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.59997 48.6896L7.6552 46.7448L7.27808 47.1219L9.59997 49.4438L11.9219 47.1219L11.5447 46.7448L9.59997 48.6896Z" fill="#0A0B0D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.86671 29.8667V49.0667H9.33337V29.8667H9.86671Z" fill="#0A0B0D"></path></svg>
              <Heading fontSize={"2xl"}>Secure storage</Heading>
              <Text textAlign={"center"} fontSize={"0.9rem"}>We store the vast majority of the digital assets in secure offline storage.</Text>
              <Button  mt={"30px"} colorScheme='teal' variant='ghost' p={"20px"}>Learn more <BiRightArrow size={".6rem"} /> </Button>
            </Box>
            <Box gap={"10px"} p={"50px"} width={"35%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <svg  width="57" height="64" viewBox="0 0 57 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 0L-4 10.6667V32C-4 49.68 10.32 64 28 64C45.68 64 60 49.68 60 32V10.6667L28 0Z" fill="#CED2DB"></path><path d="M28 0L-4 10.6667V32H28V0Z" fill="#0052FF"></path><path d="M28 54.6667C40.5185 54.6667 50.6667 44.5185 50.6667 32C50.6667 19.4816 40.5185 9.33334 28 9.33334C15.4816 9.33334 5.33337 19.4816 5.33337 32C5.33337 44.5185 15.4816 54.6667 28 54.6667Z" fill="white"></path><path d="M28 64C45.68 64 60 49.68 60 32H28V64Z" fill="#0A0B0D"></path><path d="M28 54.6667C40.5067 54.6667 50.6667 44.5067 50.6667 32H28V54.6667Z" fill="#0052FF"></path><path d="M6.42664 30.9333C6.95997 19.8667 15.8666 10.96 26.9333 10.4267V30.9333H6.42664Z" fill="#CED2DB"></path><path d="M25.8667 11.5733V29.8667H7.57337C8.58671 20.24 16.24 12.5867 25.8667 11.5733ZM28 9.33334C15.4934 9.33334 5.33337 19.4933 5.33337 32H28V9.33334Z" fill="#CED2DB"></path><path d="M28 9.33334C15.4934 9.33334 5.33337 19.4933 5.33337 32H28V9.33334Z" fill="#5DE2F8"></path><path d="M28 18.1333C20.3466 18.1333 14.1333 24.3467 14.1333 32C14.1333 39.6533 20.3466 45.8667 28 45.8667C32.08 45.8667 35.7333 44.1067 38.2666 41.3333C38.56 41.0133 38.8533 40.6667 39.12 40.2933C39.3866 39.9467 39.6266 39.5733 39.8666 39.2C40.1066 38.8267 40.32 38.4267 40.5066 38.0267C41.3866 36.2133 41.8666 34.16 41.8666 32.0267C41.8666 24.3467 35.6533 18.1333 28 18.1333Z" fill="#FFD200"></path><path d="M14.1333 32H28V18.1333C20.3466 18.1333 14.1333 24.3467 14.1333 32Z" fill="#0052FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28 21.6C22.2562 21.6 17.6 26.2563 17.6 32C17.6 37.7438 22.2562 42.4 28 42.4C33.7437 42.4 38.4 37.7438 38.4 32C38.4 26.2563 33.7437 21.6 28 21.6ZM17.0667 32C17.0667 25.9617 21.9617 21.0667 28 21.0667C34.0383 21.0667 38.9333 25.9617 38.9333 32C38.9333 38.0383 34.0383 42.9333 28 42.9333C21.9617 42.9333 17.0667 38.0383 17.0667 32Z" fill="#0A0B0D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.4 32C46.4 37.0867 44.3433 41.6871 41.0152 45.0152C37.6871 48.3433 33.0867 50.4 28 50.4V49.8667C32.9399 49.8667 37.4062 47.87 40.6381 44.6381C43.87 41.4062 45.8667 36.9399 45.8667 32H46.4Z" fill="#0A0B0D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9847 18.9848C18.3128 15.6567 22.9132 13.6 28 13.6V14.1333C23.06 14.1333 18.5938 16.13 15.3619 19.3619C12.13 22.5938 10.1333 27.0601 10.1333 32H9.59998C9.59998 26.9133 11.6567 22.3129 14.9847 18.9848Z" fill="#0A0B0D"></path></svg>
              <Heading fontSize={"2xl"}>Industry best practices</Heading>
              <Text textAlign={"center"} fontSize={"0.9rem"}>Coinbase supports a variety of the most popular digital currencies.</Text>
              <Button  mt={"30px"} colorScheme='teal' variant='ghost' p={"20px"}>Learn more <BiRightArrow size={".6rem"}/> </Button>
              
            </Box>
          </HStack>
        </VStack>
        {/* Section ends here */}
        <Box p={'50px'} m={"30px 0px"} w={"100%"} bgColor={"blue.600"}>
          <HStack justifyContent={"space-evenly"} alignItems={"center"}>
            <Box> 
              <Heading textAlign={"center"} color={"white"}>₹44,00,000 Cr</Heading>
              <Text color={"whiteAlpha.700"} fontWeight={"500"} textAlign={"center"}>Quarterly volume traded</Text>
              </Box>
              <Box> 
              <Heading textAlign={"center"} color={"white"}>100+</Heading>
              <Text color={"whiteAlpha.700"} fontWeight={"500"} textAlign={"center"}>Countries supported</Text>
              </Box><Box> 
              <Heading textAlign={"center"} color={"white"}>$130B</Heading>
              <Text color={"whiteAlpha.700"} fontWeight={"500"} textAlign={"center"}>Assets on platform</Text>
              </Box>
          </HStack>
        </Box>
        {/* section ends here */}
        <Box mb={"200px"}>
          <VStack>
            <Box m={"80px"} >
              <Heading m={"10px"} textAlign={"center"} fontSize={"5xl"}>Get started in a few minutes</Heading>
              <Text textAlign={"center"} fontWeight={"light"}>Coinbase supports a variety of the most popular digital currencies.</Text>
            </Box>
            <HStack gap={"10rem"} >
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"20px"} >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48148 40H46.5185C47.3333 40 48 39.2 48 38.2222V9.77778C48 8.8 47.3333 8 46.5185 8H9.48148C8.66667 8 8 8.8 8 9.77778V38.2222C8 39.2 8.66667 40 9.48148 40Z" fill="#0052FF"></path><path d="M27 48L27 0L0 9.85319e-10L1.75168e-09 48L27 48Z" fill="#BFE9FF"></path><path d="M27 48L27 0L0 9.85319e-10L1.75168e-09 48L27 48Z" fill="#CED2DB"></path><path d="M27 8H9.46154C8.65769 8 8 8.8 8 9.77778V38.2222C8 39.2 8.65769 40 9.46154 40H27V8Z" fill="#0A0B0D"></path><path d="M18 24C19.6569 24 21 22.6569 21 21C21 19.3431 19.6569 18 18 18C16.3431 18 15 19.3431 15 21C15 22.6569 16.3431 24 18 24Z" fill="white"></path><path d="M18 25.5C14.685 25.5 12 27.5175 12 30H24C24 27.5175 21.315 25.5 18 25.5Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48 24H27V40H46.5185C47.3333 40 48 39.2 48 38.2222V24Z" fill="#CED2DB"></path><path d="M37.5 26L38.4717 30.94L43 32L38.4717 33.06L37.5 38L36.5283 33.06L32 32L36.5283 30.94L37.5 26Z" fill="#0A0B0D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.6905 12.7233L35.6667 20.3824L31.3095 16.2233L32.6905 14.7766L35.6667 17.6175L42.3095 11.2766L43.6905 12.7233Z" fill="white"></path></svg>
              <Text>Create an account</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"20px"}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 24H0V48H48V24Z" fill="#CED2DB"></path><path d="M24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24H18C18 25.5913 18.6321 27.1174 19.7574 28.2426C20.8826 29.3679 22.4087 30 24 30C25.5913 30 27.1174 29.3679 28.2426 28.2426C29.3679 27.1174 30 25.5913 30 24H48C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48Z" fill="#0052FF"></path><path d="M48 24H30C30 22.4087 29.3679 20.8826 28.2426 19.7574C27.1174 18.6321 25.5913 18 24 18C22.4087 18 20.8826 18.6321 19.7574 19.7574C18.6321 20.8826 18 22.4087 18 24H0C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24Z" fill="#CED2DB"></path><path d="M9 32.98C13.9706 32.98 18 28.9505 18 23.98C18 19.0094 13.9706 14.98 9 14.98C4.02944 14.98 0 19.0094 0 23.98C0 28.9505 4.02944 32.98 9 32.98Z" fill="#0A0B0D"></path><path d="M0 24C0 21.6131 0.948212 19.3239 2.63604 17.636C4.32387 15.9482 6.61305 15 9 15C11.3869 15 13.6761 15.9482 15.364 17.636C17.0518 19.3239 18 21.6131 18 24H0Z" fill="#0052FF"></path><path d="M11.09 19.89H6.91C5.80543 19.89 4.91 20.7854 4.91 21.89V26.07C4.91 27.1746 5.80543 28.07 6.91 28.07H11.09C12.1946 28.07 13.09 27.1746 13.09 26.07V21.89C13.09 20.7854 12.1946 19.89 11.09 19.89Z" fill="white"></path><path d="M39 32.98C43.9706 32.98 48 28.9505 48 23.98C48 19.0094 43.9706 14.98 39 14.98C34.0294 14.98 30 19.0094 30 23.98C30 28.9505 34.0294 32.98 39 32.98Z" fill="#0052FF"></path><path d="M48 24C48 26.3869 47.0518 28.6761 45.364 30.364C43.6761 32.0518 41.3869 33 39 33C36.6131 33 34.3239 32.0518 32.636 30.364C30.9482 28.6761 30 26.3869 30 24H48Z" fill="#0A0B0D"></path><path d="M38.98 23.98C40.7363 23.98 42.16 22.5563 42.16 20.8C42.16 19.0437 40.7363 17.62 38.98 17.62C37.2237 17.62 35.8 19.0437 35.8 20.8C35.8 22.5563 37.2237 23.98 38.98 23.98Z" fill="white"></path><path d="M39 24C38.1653 23.9987 37.3385 24.162 36.5669 24.4805C35.7953 24.799 35.0941 25.2666 34.5034 25.8563C33.9127 26.4461 33.4441 27.1466 33.1243 27.9177C32.8046 28.6887 32.64 29.5153 32.64 30.35C34.3271 32.0324 36.6124 32.9771 38.995 32.9771C41.3776 32.9771 43.6629 32.0324 45.35 30.35C45.35 28.6659 44.681 27.0507 43.4901 25.8599C42.2993 24.669 40.6841 24 39 24Z" fill="white"></path></svg>
                <Text>Link your bank account</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"20px"}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 24H48V48H0V24Z" fill="#CED2DB"></path><path d="M6 8H14V24H6V8Z" fill="#00D17F"></path><path d="M6 24H14V32H6V24Z" fill="#0A0B0D"></path><path d="M20 16H28V24H20V16Z" fill="#FF3344"></path><path d="M20 24H28V40H20V24Z" fill="#0A0B0D"></path><path d="M34 6H42V24H34V6Z" fill="#00D17F"></path><path d="M34 24H42V30H34V24Z" fill="#0A0B0D"></path><path d="M23 10H25V16H23V10Z" fill="#FF3344"></path><path d="M9 2H11V8H9V2Z" fill="#00D17F"></path><path d="M37 0H39V6H37V0Z" fill="#00D17F"></path><path d="M37 30H39V36H37V30Z" fill="#0A0B0D"></path><path d="M9 32H11V38H9V32Z" fill="#0A0B0D"></path><path d="M23 40H25V46H23V40Z" fill="#0A0B0D"></path></svg>
              <Text>Start buying & selling</Text>
              </Box>
            </HStack>
            <Text p={"100px 0px"} w={"70rem"}>*Upon purchase of USDC, you will be automatically opted in to rewards. If you’d like to opt out or learn more about rewards, you can click here. The rewards rate is subject to change and can vary by region. Customers will be able to see the latest applicable rates directly within their accounts.</Text>
          </VStack>
        </Box>
        {/* section ends here */}
        
        <Footer/>
      </Box>
    </>
  );
};

export default Home;
