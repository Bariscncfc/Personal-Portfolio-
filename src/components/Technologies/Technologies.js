import React from "react";
import { DiNodejs, DiReact, DiJavascript1, DiFirebase } from "react-icons/di";
import { SiRedux } from "react-icons/Si";
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
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Teknolojiler</SectionTitle>
    <SectionText>
      Web geliştirme alanında ağırlıklı olarak javascript teknolojileri ile
      geliştirme yapıyorum.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>single page uygulamalar</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size="3rem" />
        <ListContainer>
          <ListTitle>Redux</ListTitle>
          <ListParagraph>uygulama state yönetimi</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="5rem" />
        <ListContainer>
          <ListTitle>NodeJs</ListTitle>
          <ListParagraph>sunucu tabanlı uygulamalar</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>temelden ileriye javascript bilgisi</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Firebase & Api</ListTitle>
          <ListParagraph>uzak veri çekme işlemleri</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
