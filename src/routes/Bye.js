import { Image } from "@chakra-ui/image";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const Bye = () => {
	return (
		<VStack minH={"100vh"}>
			<VStack minH={"100vh"} justifyContent={"center"} px={10} maxW={"100vw"}>
				<HStack height={"fit-content"} maxW={"550"} padding={10}>
					<Image src="img/byeImage.png" alt="example detail" />
				</HStack>
				<Heading textAlign={"center"} pb={"10"}>
					답변해주셔서 감사합니다. <br />늘 여러분의 커리어를 응원할게요!
				</Heading>
				<Text pb={20}>활발한 공유는 통계에 이롭습니다 :)</Text>
			</VStack>
		</VStack>
	);
};
export default Bye;
