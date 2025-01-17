import {
  background,
  Box,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  useDisclosure,
  useOutsideClick,
  Heading,
  Stack,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { Link, Navigate, NavLink } from "react-router-dom";
import {
  Search2Icon,
  ChevronRightIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AppContext";

const links = [
  {
    path: "/exclusive",
    title: "Exclusive Brands",
  },
  {
    path: "/stores",
    title: "Stores",
  },
  {
    path: "/deals",
    title: "Deals",
  },
  {
    path: "/shoptravel",
    title: "SHOP Travel",
  },
  {
    path: "/department",
    title: "Departments",
  },
  {
    path: "/shopbuddy",
    title: "ShopBuddy",
  },
  {
    path: "/shoplocal",
    title: "SHOP Local",
  },
];
function selects() {
  return (
    <select
      style={{ background: "transparent", width: "100%", cursor: "pointer" }}
    >
      <option value="">All Departments</option>
      <option value="">Auto</option>
      <option value="">Baby</option>
      <option value="">Beuty</option>
    </select>
  );
}
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState('right')
  const {isAuth,logOutuser}=useContext(AuthContext);
  const logoutUser=()=>{
    logOutuser();
  }
  // if(!isAuth)
  // {
  //   return <Navigate to="/login" />
  // }

  // console.log(isModalOpen)
  return (
    <>
    {/* pos="fixed"  zIndex={2} _after={{marginTop:"0px"}} */}
      <Box bg="#f0f1f7"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w="100%" p={4}
      >
        <Flex zIndex={-5}>
          <Box>
            <Link to="/">
              {" "}
              <Image
                ml={5}
                w="200px"
                src="https://img.shop.com/Image/resources/logos/shop-logo-us-gold.svg"
                alt="SHOP.COM"
              />
            </Link>
          </Box>
          <Spacer />
          <Box w="45%">
            {" "}
            <InputGroup borderRadius={50} border="1px solid black" size="sm">
              <InputLeftAddon
                borderRadius={50}
                mt={2}
                mb={2}
                border="none"
                borderRight="1px solid black"
                children={selects()}
              />
              <Input
                border="none"
                mt={2}
                mb={2}
                placeholder="Search SHOP.COM…"
              />
              <InputRightAddon
                cursor="pointer"
                borderRadius={50}
                border="none"
                bg="#202340"
                h=""
                borderLeft="1px solid black"
                children={<Search2Icon color="white" />}
              />
            </InputGroup>
          </Box>
          <Spacer />
          <Box display="flex" justifyContent="right" w="30%">
            <Link to="/">
              <Image
                w="100%"
                src="https://www.shop.com/feo-cdn/9/r/Owin3kM4A.webp"
                alt="offer"
              ></Image>
            </Link>
          </Box>
        </Flex>

        <Flex mt={1}>
        <Box mt={2}>
            <Flex
              ref={btnRef}
              _hover={{ color: "#0098b8" }}
              onClick={onOpen}
              alignItems="center"
            >
              <Image
                ml={5}
                mr={1}
                w="30px"
                src="https://img.icons8.com/ios-filled/344/menu--v4.png"
                alt="SHOP.COM"
              />
              Categories
            </Flex>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton border="1px solid black" borderRadius={25} />
                <DrawerHeader>
                  <Flex alignItems="center">
                    <Image
                      mr={2}
                      w="50px"
                      src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg"
                      alt="logoo"
                    />
                    <Heading as="h4" size="lg">
                      SHOP.COM
                    </Heading>
                  </Flex>
                </DrawerHeader>

                <DrawerBody>
                  <Stack color="black" mt={4}>
                    <Heading as="h3" size="md">
                      Categories
                    </Heading>
                    <Link to="/">
                      <Text
                        _hover={{ background: "#f0f1f7" }}
                        mt={3}
                        fontSize="15px"
                      >
                        Featured Brand: Shark|Ninja
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Newly Launched Products
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Back to School
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Gift Center
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        SHOP.COM Home Warranties
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Onecart Exclusive Deals
                      </Text>
                    </Link>

                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Clotheschevron
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Shoeschevron
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Beautychevron
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Homechevron
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Electronicschevron
                      </Text>
                    </Link>

                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Health & Nutritionchevron
                        <Icon ml="20%" as={ChevronRightIcon} />
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Jewelrychevron
                        <Icon ml="48%" as={ChevronRightIcon} />
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Pet Supplieschevron{" "}
                        <Icon ml="35%" as={ChevronRightIcon} />
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Kidschevron <Icon ml="55%" as={ChevronRightIcon} />
                      </Text>
                    </Link>
                    <Link to="/">
                      <Text _hover={{ background: "#f0f1f7" }} fontSize="15px">
                        Sports <Icon ml="70%" as={ChevronRightIcon} />{" "}
                      </Text>{" "}
                    </Link>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <Spacer />
          <Box mt={2} w="45%">
            <Flex justifyContent="space-between" alignItems="center">
              {links.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  <Text _hover={{ color: "#0098b8" }} fontSize="14px">
                    {item.title}
                  </Text>
                </NavLink>
              ))}
            </Flex>
          </Box>
          <Spacer />
          <Box mt={2} w="26%">
            <Flex alignItems="center" justifyContent="space-evenly">
              <Box>
                {/* < to="/login"> */}
                {isAuth?  <Flex  _hover={{ color: "#0098b8" }} alignItems="center">
                    <Button onClick={logoutUser}> <Avatar
                      size="sm"
                      _hover={{ background: "#0098b8" }}
                      bg="black" mr={2}
                    /> Log Out</Button>
                  </Flex> :  <Link to="/login">  <Flex  _hover={{ color: "#0098b8" }} alignItems="center">
                    <Avatar
                      size="sm"
                      _hover={{ background: "#0098b8" }}
                      bg="black"
                    />
                    
                    <Text ml={2}>Sign in</Text>
                  </Flex> 
                  </Link>}
                

              </Box>
              <Box>
                <Link to="/orders">
                  {" "}
                  <Flex _hover={{ color: "#0098b8" }} alignItems="center">
                    <Icon w={6} h={6} as={RepeatClockIcon} />
                    <Text ml={2}>Orders</Text>
                  </Flex>
                </Link>
              </Box>
              <Box>
                <Link to="/cart">
                  {" "}
                  <Flex _hover={{ color: "#0098b8" }} alignItems="center">
                    <Avatar
                      size="sm"
                      _hover={{ background: "#0098b8" }}
                      bg="transparent"
                      src="https://img.icons8.com/material-rounded/344/shopping-cart.png"
                    />
                    <Text ml={2}>Cart</Text>
                  </Flex>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <hr></hr>
      <Box
        bg="#f0f1e0"
       
        color="black"
        w="100%"
        p={2}
      >
        <Flex fontSize="13px" justifyContent="space-between">
          <Box>
            <Flex>
              
              <Text ml={2}>Your Shop Consultant is </Text>
              <Link to="/">
                <Text fontWeight="bold" textDecoration="underline" ml={1}>
                  SHOP Corporate Services
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box>
            <Text mr={2}>Earn up to <b>50% Cashback</b> on eligible purchases.<Link to="/"><b><u>Learn More</u></b></Link></Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
