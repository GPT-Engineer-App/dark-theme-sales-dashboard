import { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, IconButton, Avatar, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Calendar from "../components/Calendar";
import { FaHome, FaSearch, FaPlus, FaUser, FaChartBar, FaTasks, FaCalendarAlt } from "react-icons/fa";

// Custom theme

const Sidebar = () => (
  <Box bg="#242424" w="250px" p="4" color="white">
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
    <Box bg="#242424" h="200px" mt="4" borderRadius="md">
      <Text color="white">Referral: 40%</Text>
      <Text color="white">Social Media: 30%</Text>
      <Text color="white">Organic Search: 20%</Text>
      <Text color="white">Paid Ads: 5%</Text>
      <Text color="white">Direct Traffic: 5%</Text>
    </Box>
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
      <Calendar />
    </Box>
    <Box mt="4">
      {[
        { task: "RV Viewing", date: "2024-05-23" },
        { task: "Test Drive", date: "2024-05-24" },
        { task: "Follow-up Call", date: "2024-05-25" },
      ].map((task, index) => (
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

const Index = () => <Dashboard />;

export default Index;
