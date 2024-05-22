import { Box, Text } from "@chakra-ui/react";

const Calendar = () => (
  <Box bg="#242424" p="4" borderRadius="md">
    <Text color="accent.orange">May 2024</Text>
    <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="2" mt="4">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <Text key={day} color="white" textAlign="center">
          {day}
        </Text>
      ))}
      {Array.from({ length: 31 }, (_, i) => (
        <Box key={i} bg={i % 2 === 0 ? "accent.green" : "accent.orange"} h="40px" borderRadius="md" />
      ))}
    </Box>
  </Box>
);

export default Calendar;
