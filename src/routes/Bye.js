import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const Bye = () => {
	return (
		<VStack minH={"100vh"}>
			<VStack minH={"100vh"} justifyContent={"center"}>
				<Heading textAlign={"center"} pb={"10"}>
					답변해주셔서 감사합니다. <br />늘 여러분의 커리어를 응원할게요!
				</Heading>
				<Text>활발한 공유는 통계에 이롭습니다 :)</Text>
			</VStack>
		</VStack>
	);
};
export default Bye;
