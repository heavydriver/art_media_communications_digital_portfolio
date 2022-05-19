import React from "react";
// import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAutodesk,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle main>Skills</SectionTitle>
    <SectionText>
      I have worked with Photoshop, Illustrator, and TinkerCAD.
    </SectionText>
    <List>
      <ListItem>
        <SiAdobephotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Photo Editing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobeillustrator size="3rem" />
        <ListContainer>
          <ListTitle>Illustrations</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAutodesk size="3rem" />
        <ListContainer>
          <ListTitle>3D</ListTitle>
          <ListParagraph>
            Experience with <br />
            TinkerCAD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
