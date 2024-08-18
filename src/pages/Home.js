import { Button, Card, CardBody, Heading, Image, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import girl from "../resources/girl_reading.png"

export default function Home() {
  return (
    <div className="flex flex-col justify-center mx-10 mt-20 md:mx-24 sm:flex-row">
      <Card variant={"elevated"} maxW="md">
        <CardBody>
          <div className="flex flex-row justify-center items-center bg-BgPrimary rounded-xl p-4 m-2">
            <Text className="text-xl leading-9 font-[900] text-TextPrimary w-1/2">
              INTERNATIONAL DEGREE NOW IN YOUR BUDGET
            </Text>
            <Image className="w-1/2" borderRadius="lg" src={girl} />
          </div>
          <Stack mt="8" mx="4" spacing="3">
            <Input variant="outline" placeholder="Name" />
            <InputGroup>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type="tel" placeholder="Phone Number" />
            </InputGroup>
            <Input variant="outline" placeholder="Email" />
            <Input variant="outline" placeholder="City" />
            <Button className="mt-2">Get your free consulting now</Button>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
