import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Digital Portfolio
      </SectionTitle>
      <SectionText>
        Here is a collection of all my digital art work from the Art and Media
        Communications course.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
