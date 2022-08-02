import styled from "styled-components";
import Name from "./Name";
import Contact from "./Contact";

export default function ResHeader() {
  return (
    <HeaderContainer>
      <Name />
      <Contact />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div``;
