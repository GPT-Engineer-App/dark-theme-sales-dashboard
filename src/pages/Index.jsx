import { useState, useEffect } from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, IconButton, Avatar, Table, Thead, Tbody, Tr, Th, Td, useColorMode, useColorModeValue, extendTheme, ChakraProvider, Switch } from "@chakra-ui/react";
import { FaHome, FaSearch, FaPlus, FaUser, FaChartBar, FaTasks, FaCalendarAlt } from "react-icons/fa";
import Calendar from "../components/Calendar.jsx";

// Custom theme
const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1A1A1A",
        color: "#FFFFFF",
      },
    },
  },
  colors: {
    primary: {
      500: "#FF6600",
    },
    secondary: {
      500: "#C2BFBF",
    },
    accent: {
      green: "#00FF00",
      orange: "#FF9900",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
        color: "#000000",
      },
    },
  },
  colors: {
    primary: {
      500: "#FF6600",
    },
    secondary: {
      500: "#C2BFBF",
    },
    accent: {
      green: "#00FF00",
      orange: "#FF9900",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

const Sidebar = ({ toggleTheme, isDark }) => (
  <Box bg={isDark ? "#242424" : "#F0F0F0"} w="250px" p="4" color={isDark ? "white" : "black"}>
    <VStack align="start" spacing="4">
      <HStack>
        <FaHome />
        <Text>Dashboard</Text>
      </HStack>
      <HStack>
        <FaUser />
        <Text>Leads</Text>
      </HStack>
      <HStack>
        <FaUser />
        <Text>Customers</Text>
      </HStack>
      <HStack>
        <FaChartBar />
        <Text>Sales</Text>
      </HStack>
      <HStack>
        <FaTasks />
        <Text>Inventory</Text>
      </HStack>
      <HStack>
        <Text>Light Theme</Text>
        <Switch isChecked={!isDark} onChange={toggleTheme} />
      </HStack>
    </VStack>
  </Box>
);

const Header = () => (
  <Box bgImage="url('https://images.unsplash.com/photo-1520101244246-293f77ffc39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSVnMlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNjMxOTc2NHww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" p="8" color="white" textAlign="center" position="relative">
    <Box bg="rgba(0, 0, 0, 0.5)" p="8" borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold">
        Good morning, Cannon!
      </Text>
      <Text fontSize="lg" color="#C2BFBF">
        You have 5 new leads today... Let's make it a great day!
      </Text>
      <HStack mt="4" spacing="4">
        <Input placeholder="Search..." bg="#242424" color="#C2BFBF" _placeholder={{ color: "#C2BFBF" }} />
        <IconButton aria-label="Search" icon={<FaSearch />} bg="#242424" color="white" />
        <Button leftIcon={<FaPlus />} colorScheme="primary" variant="solid">
          Create new lead
        </Button>
      </HStack>
    </Box>
  </Box>
);

const Statistics = () => (
  <HStack spacing="4" mt="8">
    {["Open leads", "Closed leads", "Total leads", "Total sales value"].map((stat, index) => (
      <Box key={index} bg="#242424" p="4" borderRadius="md" flex="1">
        <Text fontSize="lg" fontWeight="bold">
          {stat}
        </Text>
        <Text fontSize="md" color={index % 2 === 0 ? "accent.green" : "accent.orange"}>
          +{Math.floor(Math.random() * 100)}%
        </Text>
      </Box>
    ))}
  </HStack>
);

const LeadsBySourceChart = () => (
  <Box bg="#1A1A1A" p="4" borderRadius="md" mt="8">
    <Text fontSize="lg" fontWeight="bold">
      Leads by Source
    </Text>
    {/* Placeholder for chart */}
    <Calendar />
  </Box>
);

const SalesPipeline = () => (
  <Box bg="#1A1A1A" p="4" borderRadius="md" mt="8">
    <Text fontSize="lg" fontWeight="bold">
      Sales Pipeline
    </Text>
    <Table variant="simple" mt="4">
      <Thead>
        <Tr>
          <Th color="white">Lead Name</Th>
          <Th color="white">RV Interest</Th>
        </Tr>
      </Thead>
      <Tbody>
        {["John Doe", "Jane Smith", "Alice Johnson"].map((name, index) => (
          <Tr key={index}>
            <Td color="#C2BFBF">{name}</Td>
            <Td color="#C2BFBF">Airstream Classic</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

const TodaysLeads = () => (
  <Box bg="#1A1A1A" p="4" borderRadius="md" mt="8">
    <Text fontSize="lg" fontWeight="bold">
      Today's Leads
    </Text>
    <Table variant="simple" mt="4">
      <Thead>
        <Tr>
          <Th color="white">Lead Name</Th>
          <Th color="white">Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {["John Doe", "Jane Smith", "Alice Johnson"].map((name, index) => (
          <Tr key={index}>
            <Td color="#C2BFBF">
              <HStack>
                <Avatar name={name} size="sm" />
                <Text>{name}</Text>
              </HStack>
            </Td>
            <Td color="primary.500">Open</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

const AppointmentsAndTasks = () => (
  <Box bg="#1A1A1A" p="4" borderRadius="md" mt="8">
    <Text fontSize="lg" fontWeight="bold">
      Appointments and Tasks
    </Text>
    <Box mt="4">
      {/* Placeholder for calendar */}
      <Box bg="#242424" h="200px" borderRadius="md"></Box>
    </Box>
    <Box mt="4">
      {["RV Viewing", "Test Drive"].map((task, index) => (
        <HStack key={index} justify="space-between" bg="#242424" p="2" borderRadius="md" mt="2">
          <Text color="#C2BFBF">{task}</Text>
          <Button size="sm" bg="#242424" color="white">
            Edit
          </Button>
        </HStack>
      ))}
    </Box>
  </Box>
);

const QuickActions = () => (
  <HStack spacing="4" mt="8">
    <Button colorScheme="primary" variant="solid" leftIcon={<FaPlus />}>
      New Lead
    </Button>
    <Button colorScheme="primary" variant="solid" leftIcon={<FaChartBar />}>
      View Pipeline
    </Button>
  </HStack>
);

const Dashboard = () => (
  <Box display="flex">
    <Sidebar />
    <Container maxW="container.xl" p="4">
      <Header />
      <Statistics />
      <LeadsBySourceChart />
      <SalesPipeline />
      <TodaysLeads />
      <AppointmentsAndTasks />
      <QuickActions />
    </Container>
  </Box>
);

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000000" : "#FFFFFF";
  }, [isDark]);

  return (
    <ChakraProvider theme={isDark ? darkTheme : lightTheme}>
      <Box bg={isDark ? "#000000" : "#FFFFFF"} minH="100vh" color={isDark ? "white" : "black"}>
        <Dashboard toggleTheme={toggleTheme} isDark={isDark} />
      </Box>
    </ChakraProvider>
  );
};

export default Index;
