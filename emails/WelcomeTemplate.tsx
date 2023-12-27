import {
  Html,
  Body,
  Container,
  Tailwind,
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
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://github.com/rohan-bhautoo">
              www.github.com/rohan-bhautoo
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
