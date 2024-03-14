import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Button, Link, Divider, Grid, GridItem, useColorMode, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box as="header" p={4} bg={colorMode === "light" ? "purple.500" : "purple.800"}>
        <HStack justify="space-between">
          <Heading size="xl" color="white">
            Michael Gruen
          </Heading>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
        </HStack>
      </Box>

      <VStack spacing={8} align="center" p={8}>
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnZW4lMjB6JTIwbWFsZSUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDQwNzM5NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Michael Gruen" />
        <VStack>
          <Heading size="2xl">Yo, I'm Michael! 🚀</Heading>
          <Text fontSize="xl" textAlign="center">
            Gen Z Entrepreneur. Building the future, one wild idea at a time! 🌈
          </Text>
        </VStack>

        <HStack spacing={4}>
          <Link href="https://instagram.com/michaelgruen" isExternal>
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com/michaelgruen" isExternal>
            <FaTwitter size={24} />
          </Link>
          <Link href="https://linkedin.com/in/michaelgruen" isExternal>
            <FaLinkedin size={24} />
          </Link>
        </HStack>

        <Divider />

        <VStack align="start" spacing={8} maxW="3xl">
          <Heading size="xl">My Ventures 🔥</Heading>

          <VStack align="start" spacing={4}>
            <Heading size="lg">My Skills 🚀</Heading>
            <HStack spacing={8}>
              <VStack align="center">
                <Image src="icon-1.png" alt="Skill 1" boxSize="60px" />
                <Text>Skill 1</Text>
              </VStack>
              <VStack align="center">
                <Image src="icon-2.png" alt="Skill 2" boxSize="60px" />
                <Text>Skill 2</Text>
              </VStack>
              <VStack align="center">
                <Image src="icon-3.png" alt="Skill 3" boxSize="60px" />
                <Text>Skill 3</Text>
              </VStack>
            </HStack>
          </VStack>
          <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHRlYW18ZW58MHx8fHwxNzEwNDA3Mzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Startup 1" />
              <Heading size="lg">Startup 1</Heading>
              <Text>Disrupting the industry with AI!</Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzEwNDA3Mzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Startup 2" />
              <Heading size="lg">Startup 2</Heading>
              <Text>Revolutionizing social media, stay tuned!</Text>
            </GridItem>
          </Grid>
        </VStack>

        <VStack align="start" spacing={4} maxW="3xl">
          <Heading size="lg">Testimonials 💬</Heading>
          <VStack align="start" spacing={2}>
            <Text>"Michael is a visionary leader!" - Person 1</Text>
            <Text>"Truly innovative ideas" - Person 2</Text>
            <Text>"Can't wait to see what Michael does next" - Person 3</Text>
          </VStack>
        </VStack>

        <Divider />

        <VStack align="center" spacing={4} maxW="3xl">
          <Heading size="xl">Let's Collab! 🤝</Heading>
          <Text fontSize="lg" textAlign="center">
            Got a sick idea? Hit me up, let's make it happen and change the world! 🌍
          </Text>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="purple" size="lg">
            Submit
          </Button>
        </VStack>
      </VStack>

      <Box as="footer" p={4} bg={colorMode === "light" ? "gray.200" : "gray.700"} textAlign="center">
        <Text>Made with ❤️ by Michael Gruen</Text>
      </Box>
    </Box>
  );
};

export default Index;
