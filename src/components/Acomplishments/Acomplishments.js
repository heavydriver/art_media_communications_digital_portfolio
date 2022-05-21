import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section id="conclusion">
    <SectionDivider />
    <SectionTitle main>Conclusion</SectionTitle>
    <SectionText>
      The Art and Media Communications course taught me a variety of art
      principles and concepts. All of these concepts have been utilized in my
      digital art projects. I have always tried to make something outside the
      box. I hope to use my digital art skills to be creative and make new
      pieces of art.
    </SectionText>
  </Section>
);

export default Acomplishments;
