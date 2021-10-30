import React from "react";

import {
  FooterContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  FooterText,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@cifcibaris24.com">
            cifcibaris24@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <FooterContainer>
        <FooterText>2021 Barış Can Çifçi & Kişisel Website</FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
