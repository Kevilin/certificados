import React, { useState, useEffect } from "react";
import { Stack, Grid, Box, Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { GetData } from "../Home/Hosts/Host.logical";
import Cards from "../../components/Cards";
import { useMediaQuery } from "@chakra-ui/react";

const Posts = () => {
  const { getDataByAPI, data } = GetData();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    getDataByAPI();
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Stack bg="#2E2E2E" >
      <Box minHeight="100vh" mb={20}>
        <Stack direction="row" flexWrap="wrap" p={2} justifyContent="center">
        <Stack direction="row" mb={4} spacing={4} p={2} display={isSmallerThan960 ? "none" : "flex"}>
            <Button
              colorScheme={selectedCategory === "" ? "brand.btn" : ""}
              onClick={() => setSelectedCategory("")}
            >
              Todos ({data.length})
            </Button>
            <Button
              colorScheme={selectedCategory === "Backend" ? "brand.btn" : ""}
              onClick={() => setSelectedCategory("Backend")}
            >
              Backend
            </Button>
            <Button
              colorScheme={selectedCategory === "Frontend" ? "brand.btn" : ""}
              onClick={() => setSelectedCategory("Frontend")}
            >
              Frontend
            </Button>
            <Button
              colorScheme={selectedCategory === "Devops" ? "brand.btn" : ""}
              onClick={() => setSelectedCategory("Devops")}
            >
              Devops
            </Button>
            <Button
              colorScheme={selectedCategory === "Banco de dados" ? "brand.btn" : ""}
              onClick={() => setSelectedCategory("Banco de dados")}
            >
              Banco de dados
            </Button>
            <Button
              colorScheme={selectedCategory === "Engenharia de software" ? "brand.btn" : ""}
              onClick={() => setSelectedCategory("Engenharia de software")}
            >
              Eng. de software
            </Button>
          </Stack>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {data
              .filter((post) => selectedCategory === "" || post.categoria === selectedCategory)
              .map((post) => {
                return <Cards key={nanoid()} post={post} width="30%" />;
              })}
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Posts;
