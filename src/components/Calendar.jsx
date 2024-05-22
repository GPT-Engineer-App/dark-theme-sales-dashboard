import { Box, Text } from "@chakra-ui/react";

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Box bg="linear-gradient(45deg, #000000, #333333)" p="4" borderRadius="md">
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="2">
        {days.map((day) => (
          <Text key={day} color="#33ff33" textAlign="center">
            {day}
          </Text>
        ))}
        {dates.map((date) => (
          <Box key={date} bg={date % 2 === 0 ? "linear-gradient(45deg, #ff6600, #333333)" : "linear-gradient(45deg, #0066cc, #333333)"} color="#33ff33" textAlign="center" borderRadius="md" p="2">
            {date}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Calendar;
