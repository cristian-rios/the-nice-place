// lets see what happens :]]
import Heart from "./images/heart.png";
import { Box, Grommet, Heading, Image } from "grommet";
import firebase from "./firebaseSettings";

const theme = {
  global: {
    font: {
      family: "Comfortaa",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full={true}>
      <Box align={"center"} background={"black"} direction={"row"} fill={true}>
        <Box fill={"horizontal"} align={"center"} direction={"column"}>
          <Heading>Welcome to the nice place</Heading>
          <Image src={Heart} width={'50vh'}/>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
