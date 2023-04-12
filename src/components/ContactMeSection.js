import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import "../App.css"

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      if (response.type === "error") {
        onOpen({
          title: "Error",
          description: response.message,
          status: "error",
        });
      } else {
        onOpen({
          title: "Success!",
          description: `Thank you, ${formik.values.firstName}, your message has been sent.`,
          status: "success",
        });
        formik.resetForm();
      }
    }
  }, [response, onOpen]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    onSubmit: (values) => {
      submit("http://test", values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
      email: Yup.string()
      .email('Invalid Email adress')
      .required('Email is required'),
      type: Yup.string()
      .required('Please select the type of enquiry'),
      comment: Yup.string()
      .required('Please enter your message'),
    }),
  });

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
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select className="select" id="type" name="type" {...formik.getFieldProps('type')} >
                  <option className="option" value="hireMe">Freelance project proposal</option>
                  <option className="option" value="openSource">Open source consultancy session</option>
                  <option className="option" value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full"  isLoading={isLoading}>
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
