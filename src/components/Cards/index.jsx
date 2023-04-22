import React from "react";
import {
  Box,
  Divider,
  HStack,
  Text,
  Icon,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiGitRepoForked, BiCodeAlt } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";

const MotionBox = motion(Box);

const Cards = ({ post }) => {
  const { curso, url_certificado, url_imagem, categoria } = post.data().inputs;

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -10 }} p={2}>
      <Box
        borderRadius="xl"
        w={{ base: "100%", md: "23rem", lg: "100%" }}
        maxW={{ base: "100%", md: "30rem", lg: "40rem" }}
        p={4}
        bg="brand.bg"
        overflow="hidden"
        boxShadow="xl"
      >
        <Box maxW="xl" overflow="hidden" rounded="20px" maxHeight="20rem">
          <Image
            src={url_imagem}
            alt={`Imagem do curso ${curso}`}
            borderRadius="sm"
            loading="lazy"
            h={{ base: "12rem", md: "20rem", lg: "30vh" }}
            w="100%"
            objectFit="cover"
            style={{ scale: "1", transition: "0.5s ease-in-out" }}
            _hover={{ transform: "scale(1.1)" }}
            rounded="10px"
          />
        </Box>
        <Text
          minH="3.5rem"
          maxH="3.5rem"
          m=".5rem 0"
          as="h4"
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight="600"
          w="100%"
          textAlign="center"
        >
          {curso}
        </Text>
        <Divider mt={2} borderColor="gray" m=".5rem 0" />

        <a href={`${url_certificado}`} target="_blank">
          <Button
            role="button"
            w="100%"
            mt={4}
            bg="brand.btn"
            onClick={() => window.scrollTo({ top: 0 })}
            color="brand.bg"
            _hover={{ bg: "#789b8b" }}
          >
            Ver certificado
          </Button>
        </a>
      </Box>
    </MotionBox>
  );
};

export default Cards;
