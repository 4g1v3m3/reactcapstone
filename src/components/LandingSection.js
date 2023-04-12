import React from "react";
import { Avatar, Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Box h="100vh">
      <Center h="100%">
        <VStack spacing="6">
          <Avatar
            size="2xl"
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
          />
          <Heading fontSize="md">
            {greeting}
          </Heading>
          <Text fontSize="2xl" fontWeight="semibold">
            {bio1}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {bio2}
          </Text>
        </VStack>
      </Center>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
