import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MoviesTrendingContainer from "./components/MoviesTrendingContainer";
import TVSeriesTrendingContainer from "./components/TVSeriesTrendingContainer";

function App() {
  const navBarHeight = "56px";

  return (
    <Grid templateColumns={{ base: "200px 1fr", xl: "300px 1fr" }}>
      <GridItem
        position={{ base: "fixed", md: "static" }}
        colSpan={2}
        // bg="orange"
        h={navBarHeight}
        width="100%"
      >
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem
          mt={{ base: navBarHeight, md: 0 }}
          // bg="purple.400"
          border="1px dashed"
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
        // bg="blue.300"w
      >
        <TVSeriesTrendingContainer interval="week"/>
        <MoviesTrendingContainer interval="week" />
      </GridItem>
    </Grid>
  );
}

export default App;
