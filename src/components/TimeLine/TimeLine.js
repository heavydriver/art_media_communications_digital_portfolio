import React, { useState, useRef, useEffect } from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section nopadding id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        Hi, I am Varun. An aspiring web developer. I like watching cricket and
        playing video games in my free time.
      </SectionText>
    </Section>
  );
};

export default Timeline;
