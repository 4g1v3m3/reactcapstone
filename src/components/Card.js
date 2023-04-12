import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing="2"
      className="card-project"
      borderRadius="xl"
      bg="white"
      color="black"
      boxShadow="sm"
      alignItems="left"
      >
      <Image src={imageSrc} alt={title} maxW="100%" borderRadius="xl" />
      <VStack alignItems="left">
        <Heading as="h3" size="md" pl="4">{title}</Heading>
        <Text textColor="#696969"  pl={4}>{description}</Text>
      </VStack>
      <a href="#">
        <HStack>
          <Text pl={4} mb={2} fontWeight="bold">Learn more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </a>
      
    </VStack>
  );
};

export default Card;
