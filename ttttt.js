import React, {useEffect} from "react";
import { useFormik } from "formik";
import {  Box,  Button,  FormControl,  FormErrorMessage,  FormLabel,  Heading,  Input,  Select,  Textarea,  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import "../App.css"
const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      submit("Http://test", values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    }),
  });
  useEffect(() => {
    if (response.type == "error") {
      onOpen({
        title: "Error",
        description: response.message,
        status: "error"
      })} else if (response.type == 'success') {
        onOpen({
          title: "Success!",
          description: `Thank you, ${formik.values.firstName}, you message has been sent.`,
          status: "success"
        })
      formik.resetForm()}
  }, [response])
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                   name="firstName"
                   {...formik.getFieldProps('firstName')}
                  />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
