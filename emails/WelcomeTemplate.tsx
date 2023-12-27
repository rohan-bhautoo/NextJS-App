import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import React from "react";

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://github.com/rohan-bhautoo">
            www.github.com/rohan-bhautoo
          </Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
