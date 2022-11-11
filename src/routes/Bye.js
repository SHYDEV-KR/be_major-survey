import { Button, ButtonGroup } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { FaLink } from "react-icons/fa";

const Bye = () => {
	const toast = useToast();
	const copyUrl = async () => {
		const url = "https://shydev-kr.github.io/be_major-survey/";
		await navigator.clipboard.writeText(url);
		toast({
			title: "링크가 복사되었습니다!",
			description: "설문조사를 널리널리 공유해주세요😊",
			status: "success",
			duration: 9000,
			isClosable: true,
		});
	};

	return (
		<VStack minH={"100vh"}>
			<VStack minH={"100vh"} justifyContent={"center"} px={10} maxW={"100vw"}>
				<HStack height={"fit-content"} maxW={"550"} padding={10}>
					<Image src="img/byeImage.png" alt="example detail" />
				</HStack>
				<Heading textAlign={"center"} pb={"10"}>
					답변해주셔서 감사합니다. <br />늘 여러분의 커리어를 응원할게요!
				</Heading>
				<Text pb={10}>활발한 공유는 통계에 이롭습니다 :)</Text>
				<Button colorScheme="linkedin" rightIcon={<FaLink />} onClick={copyUrl}>
					링크 복사하기
				</Button>
			</VStack>
		</VStack>
	);
};
export default Bye;
