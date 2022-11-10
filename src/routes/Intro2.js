import { Button } from "@chakra-ui/button";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Highlight, Image } from "@chakra-ui/react";

const Intro2 = () => {
	const navigate = useNavigate();
	return (
		<HStack
			display={"grid"}
			gridTemplateColumns={"repeat(auto-fit, minmax(500px, 1fr));"}
			minH={"100vh"}
			maxW={"100vw"}
		>
			<VStack>
				<VStack
					minH={"100vh"}
					justifyContent={"center"}
					spacing={8}
					paddingX={10}
				>
					<Text fontSize={"3xl"} alignSelf={"flex-start"}>
						그렇다면 혹시,
					</Text>
					<Text fontSize={"2xl"} alignSelf={"flex-start"}>
						<Highlight
							query="직접 요청할 수 있고"
							styles={{
								px: "1",
								py: "1",
								bg: "orange.100",
								fontWeight: "bold",
							}}
						>
							1. 듣고 싶은 수업을 직접 요청할 수 있고
						</Highlight>
					</Text>
					<Text fontSize={"2xl"} alignSelf={"flex-start"}>
						<Highlight
							query="커리어 선배를 소개받을 수 있고"
							styles={{
								px: "1",
								py: "1",
								bg: "orange.100",
								fontWeight: "bold",
							}}
						>
							2. 조건에 부합하는 커리어 선배를 소개받을 수 있고
						</Highlight>
					</Text>
					<Text fontSize={"2xl"} alignSelf={"flex-start"}>
						<Highlight
							query="부담이 적은"
							styles={{
								px: "1",
								py: "1",
								bg: "orange.100",
								fontWeight: "bold",
							}}
						>
							3. 커리어 동료들과 비용을 나눌 수 있어서 부담이 적은
						</Highlight>
					</Text>
					<Text fontSize={"2xl"} alignSelf={"flex-start"}>
						<Highlight
							query="엄청난 서비스"
							styles={{
								px: "1",
								py: "1",
								bg: "orange.100",
								fontWeight: "bold",
							}}
						>
							엄청난 서비스가 있다면...?
						</Highlight>
					</Text>
					<Button
						colorScheme={"linkedin"}
						size={"lg"}
						onClick={() => {
							navigate("/feedback");
						}}
						alignSelf={"flex-start"}
					>
						그게 뭔데요...?
					</Button>
				</VStack>
			</VStack>
			<VStack>
				<HStack height={"fit-content"} padding={10}>
					<Image src="img/list.png" alt="example list" />
				</HStack>
			</VStack>
		</HStack>
	);
};
export default Intro2;
