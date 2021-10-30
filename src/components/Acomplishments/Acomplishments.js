import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 30, text: "Açık Kaynak Kodlu Projeler" },
  { number: 10, text: "Video Eğitim Takibi" },
  { number: 5, text: "Dökümantasyon Takibi" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Kişisel Çalışmalar</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
