import Highlights from "./sections/Highlights";
import Announcement from "./sections/Announcement";
import About from "./sections/About";
import Footer from "./sections/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import Landing from "./sections/Landing";
import styled from "styled-components";

export const Home = ()=> {
  return (
    <HomeContainer>
      <Navbar />
      <Landing />
      <Announcement />
      <Highlights />
      <About />
      <Footer />
    </HomeContainer>
  );
}
const HomeContainer = styled.div`
  >div:first-child{
    position: absolute;
  }
`
