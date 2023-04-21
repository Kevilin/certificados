import React from "react";
import { useEffect } from "react";
import { Stack, Text, Grid, Box, Spinner, Center } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { GetData } from "../Home/Hosts/Host.logical";
import Cards from "../../components/Cards";

const Posts = () => {
  const { getDataFirebase, data } = GetData();

  useEffect(() => {
    getDataFirebase();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Stack bg="#2E2E2E">
      <Box minHeight="100vh" mb={20}>
        <Stack direction="row" flexWrap="wrap" p={10} justifyContent="center">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {data.length === 0 ? (
              <Center w="100%">
                <Spinner size="xl" color="brand.btn" m="0 auto" />
              </Center>
            ) : (
              data.map((post) => {
                return <Cards key={nanoid()} post={post} width="30%" />;
              })
            )}
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Posts;
