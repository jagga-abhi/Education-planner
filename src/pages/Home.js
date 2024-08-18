import { Button, Card, CardBody, Heading, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import girl from "../resources/girl_reading.png"
import Search from "../components/Search";
import animationData from "../resources/lotties/animated_arrow.json"
import Lottie from "lottie-react"


export default function Home() {
  return (
    <div className="flex flex-col justify-evenly mx-10 mt-2 md:mx-24 sm:flex-row">
      <Stack className="">
        <Text className="text-TextPrimary font-[700] text-4xl my-1">Unlock your future,</Text>
        <Text className="text-TextPrimary font-[700] text-4xl my-1">Study Abroad and Gain</Text>
        <Text className="text-TextPrimary font-[700] text-4xl my-1">a <span className="font-[900]">Global Prespective</span></Text>
        <Search />
      </Stack>
      <Stack className="w-60 mt-16"><Lottie animationData={animationData} loop /></Stack>
      <Stack>
        <Card  bg={"#0F2167"} variant={"elevated"} maxW="sm">
        <CardBody>
          <div className="flex flex-row justify-center items-center bg-BgPrimary rounded-xl py-2 px-4 mx-1">
            <Text className="text-lg leading-9 font-[900] text-TextPrimary w-1/2">
              INTERNATIONAL DEGREE NOW IN YOUR BUDGET
            </Text>
            <Image className="w-1/2" borderRadius="lg" src={girl} />
          </div>
          <Stack mt="4" mx="4" spacing="3">
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
      </Stack>
     
    </div>
  );
}
