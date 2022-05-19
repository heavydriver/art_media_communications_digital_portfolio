import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { useRecoilState } from "recoil";
import { modalState, modalValue } from "../../../atoms/modalAtom";

const Projects = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [value, setValue] = useRecoilState(modalValue);

  return (
    <>
      <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, source, visit }) => (
              <BlogCard key={id}>
                <Img
                  src={image}
                  onClick={() => {
                    setOpen(true), setValue(id);
                  }}
                />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>
                    <br />
                    Tools
                  </TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
    </>
  );
};

export default Projects;
