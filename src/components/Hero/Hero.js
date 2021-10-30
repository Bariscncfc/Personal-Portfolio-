import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Merhaba ben Barış, <br />
        Front-End Developer'ım
      </SectionTitle>
      <SectionText>
        Javascript teknolojilerinde uzmanlaşmaya çalışan web ve mobil tarafta
        projeler geliştiren bir yazılım geliştiricisi.
      </SectionText>
      <Button href="/">Hakkımda</Button>
    </LeftSection>
  </Section>
);

export default Hero;
