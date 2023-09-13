import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

function App() {
  const navBarHeight = "64px";

  return (
    <Grid templateColumns={{base:"200px 1fr", xl:"300px 1fr"}}>
      <GridItem
        position={{ base: "fixed", md: "static" }}
        colSpan={2}
        bg="orange"
        h={navBarHeight}
        width="100%"
      >
        NavBar
      </GridItem>
      <Show above="md">
        <GridItem
          mt={{ base: navBarHeight, md: 0 }}
          bg="purple.400"
          height={`calc(100vh - ${navBarHeight})`}
          overflowY="auto"
        >
          <Text>Aside</Text>
        </GridItem>
      </Show>
      <GridItem
        colSpan={{ base: 2, md: 1 }}
        mt={{ base: navBarHeight, md: 0 }}
        height={`calc(100vh - ${navBarHeight})`}
        overflowY="auto"
        bg="blue.300"
      >
        <Text>Main</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
