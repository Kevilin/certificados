import React, { useState } from "react";
import { Stack, Box, InputGroup, InputLeftAddon, Input, FormControl, FormLabel, Textarea, Text, Icon, Button, Image, HStack } from "@chakra-ui/react";
import { VStack, Spinner } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";
import InputComp from "../../../components/Input";
import SelectComp from "../../../components/Select";
import { HandleClick } from "./Form.logical";
import { nanoid } from "nanoid";
import Confetti from "../../../components/Confetti";
import { Navigate } from "react-router-dom";

const Form = () => {
  const [uploadStatus, setUploadStatus] = useState(false);
  const { handleSubmit, handleChange, onFileChange, toSubmit, redirect } = HandleClick();
  //Read inputs of fyle
  const handleChanges = (e) => {
    if (e.target.files.length === 0) {
      return null;
    }
    onFileChange(e);
    setUploadStatus(true);
    setTimeout(() => {
      setUploadStatus(false);
    }, 4000);
  };

  return (
    <Stack as="form" w="100%" p={{ md: "7", base: "0" }} spacing={6} onSubmit={handleSubmit}>
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp nameprop="curso" label="Curso" type="text" place="" value={handleChange} />
      </Stack>
      <InputComp nameprop="url_certificado" label="URL do certificado" type="text" place="https://cursos.alura.com.br/certificate/..." value={handleChange} />
      <InputComp nameprop="url_imagem" label="URL da imagem" type="text" place="https://i.imgur.com/..." value={handleChange} />
      <SelectComp title="Categoria" options={["Backend","Frontend", "Git", "Devops", "Banco de dados"]} name="categoria" handleChange={handleChange} />

      {toSubmit ? <Confetti /> : null}
      <Button role="button" disabled={uploadStatus && true} type="submit" mt={4} p={2} w="100%" bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        {toSubmit ? (
          <>
            <HStack alignItems={"center"}>
              <Text as="p" fontSize={{ base: ".9rem", md: "1rem" }}>
                Feito! Redirecionando...
              </Text>
              <Spinner />
            </HStack>
          </>
        ) : (
          "Publicar!"
        )}
      </Button>
      {redirect && (
        <Box>
          <Navigate to="/certificados" />
        </Box>
      )}
    </Stack>
  );
};

export default Form;
