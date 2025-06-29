import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Input,
  Button,
  Avatar,
  HStack,
  VStack,
  Tabs,
  TabList,
  Tab,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Select,
  extendTheme,
} from "@chakra-ui/react";
import {
  ViewIcon,
  EditIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  FaUsers,
  FaCar,
  FaBuilding,
  FaCog,
  FaChartBar,
  FaRegEnvelope,
} from "react-icons/fa";

// Chakra UI custom theme for matching font
const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
});

const data = Array.from({ length: 5 }, (_, i) => ({
  id: 16281,
  property: "UPRES31",
  size: i < 6 ? "1500.0" : "Column",
  assignedTo: i < 6 ? "mq ar, Mark Jason" : "Column",
}));

const Sidebar = () => (
  <Box
    w="220px"
    bg="#e8f1f9"
    h="100vh"
    position="fixed"
    left="0"
    top="0"
    p="4"
    pt="6"
  >
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color="#3ba9f3"
      mb="8"
      textAlign="start"
    >
      Proptely
    </Text>
    <VStack spacing="5" align="start">
      <Box w="full" px="4">
        <Flex align="center" fontWeight="bold" color="#3ba9f3">
          <FaBuilding style={{ marginRight: "10px" }} />
          Portfolio
        </Flex>
        <VStack
          align="start"
          pl="8"
          pt="2"
          spacing="2"
          fontSize="sm"
          color="gray.700"
        >
          <Text>Properties</Text>
          <Text>Units</Text>
          <Text>Parkings</Text>
        </VStack>
      </Box>
      <Flex align="center" px="4" color="gray.600">
        <FaUsers style={{ marginRight: "10px" }} />
        Teams
      </Flex>
      <Flex align="center" px="4" color="gray.600">
        <FaCar style={{ marginRight: "10px" }} />
        Vehicles
      </Flex>
      <Flex align="center" px="4" color="gray.600">
        <FaChartBar style={{ marginRight: "10px" }} />
        Analytics
      </Flex>
      <Flex align="center" px="4" color="gray.600">
        <FaRegEnvelope style={{ marginRight: "10px" }} />
        Messages
      </Flex>
      <Flex align="center" px="4" color="gray.600">
        <FaCog style={{ marginRight: "10px" }} />
        Settings
      </Flex>
    </VStack>
  </Box>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar />

      {/* Main Container */}
      <Box ml="220px" minH="100vh" bg="gray.50">
        {/* Top Header */}
        <Flex
          bg="#e8f1f9"
          // px="6"
          pr={6}
          py="5 "
          justify="space-between"
          align="center"
          borderBottom="1px solid #d3e1ec"
        >
          <Input placeholder="Search" maxW="300px" bg="white" />
          <HStack spacing="4">
            <HStack alignItems={"center"} gap={3}>
              <Avatar size="sm" name="Alex Jonhson" />
              <Box textAlign="right">
                <Text fontWeight="bold" fontSize="sm">
                  Alex Jonhson
                </Text>
                <Text fontSize="xs">Admin</Text>
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {/* Content */}
        <Box p="6">
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Properties
              </Text>
            </Box>
            <Box>
              <Button mr={4} colorScheme="teal" size="sm">
                Import Properties
              </Button>
              <Button
                bg="#0a2e65"
                color="white"
                size="sm"
                _hover={{ bg: "#003366" }}
              >
                Add Properties
              </Button>
            </Box>
          </Flex>

          {/* Tabs and Filters */}
          <Flex justify="space-between" flexWrap="wrap" gap="6" my="6">
            <Tabs variant="unstyled" colorScheme="blue">
              <TabList>
                {["All", "Residential", "Commercial", "Co Living"].map(
                  (tab, i) => (
                    <Tab
                      key={i}
                      _selected={{
                        borderBottom: "2px solid #3182ce",
                        color: "#3182ce",
                      }}
                      px="4"
                    >
                      {tab}
                    </Tab>
                  )
                )}
              </TabList>
            </Tabs>

            <HStack>
              <Input placeholder="Search Properties" bg="white" />
              <Button colorScheme="teal" size="sm">
                Edit
              </Button>
              <Button size="sm">Clear</Button>
            </HStack>
          </Flex>

          {/* Table */}
          <Box
            overflowX="auto"
            bg="white"
            borderRadius="md"
            border="1px solid #e2e8f0"
          >
            <Table size="sm" variant="striped" >
              <Thead bg="gray.100">
                <Tr>
                  <Th>ID</Th>
                  <Th>Property</Th>
                  <Th>Tags</Th>
                  <Th>Size</Th>
                  <Th>No of Units</Th>
                  <Th>Management Fees</Th>
                  <Th>Stage</Th>
                  <Th>Assigned To</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, idx) => (
                  <Tr key={idx} _hover={{ bg: "gray.50" }}>
                    <Td>{item.id}</Td>
                    <Td>{item.property}</Td>
                    <Td></Td>
                    <Td>{item.size}</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>{item.assignedTo}</Td>
                    <Td>
                      <HStack spacing="2">
                        <IconButton
                          icon={<EditIcon />}
                          size="xs"
                          aria-label="Edit"
                        />
                        <IconButton
                          icon={<ViewIcon />}
                          size="xs"
                          aria-label="View"
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Pagination */}
          <Flex mt="4" justify="space-between" align="center">
            <HStack spacing="2">
              <Select size="sm" maxW="70px" defaultValue="10">
                <option value="10">10</option>
                <option value="20">20</option>
              </Select>
              <Text fontSize="sm">Displaying Units 1–10 of 129</Text>
            </HStack>
            <HStack spacing="1">
              <IconButton
                icon={<ChevronLeftIcon />}
                size="sm"
                aria-label="Previous"
              />
              {[1, 2, 3].map((n) => (
                <Button
                  key={n}
                  size="sm"
                  variant={n === 1 ? "solid" : "outline"}
                >
                  {n}
                </Button>
              ))}
              <Text fontSize="sm">...</Text>
              <Button size="sm">13</Button>
              <IconButton
                icon={<ChevronRightIcon />}
                size="sm"
                aria-label="Next"
              />
            </HStack>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
