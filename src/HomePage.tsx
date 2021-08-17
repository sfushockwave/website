import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  Button,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaInstagram, FaFacebook, FaRegEnvelope } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"white"}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("red.500", "whiteAlpha.200"),
      }}
      target="_blank"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function HomePage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={process.env.PUBLIC_URL + "/dragonboathero.jpg"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: "2xl", md: "6xl" })}
            fontFamily="Bebas Neue"
          >
            Alone we can do so little; Together we can do so much.
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/sfushockwave"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Facebook"}
              href={"https://www.facebook.com/sfushockwave"}
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Mail"} href={"mailto:sfudb@sfu.ca"}>
              <FaRegEnvelope />
            </SocialButton>
            <Button
              bg={"orange.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "red.500" }}
            >
              <a href="https://forms.gle/Rh4hPq5EnBPgWga97" target="b_lank">Join the team!</a>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
