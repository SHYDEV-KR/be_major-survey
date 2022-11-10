import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Box, Heading, VStack } from "@chakra-ui/layout";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<HStack
			display={"grid"}
			gridTemplateColumns={"repeat(auto-fit, minmax(500px, 1fr));"}
			gridTemplateRows={"repeat(auto-fit, minmax(50vh, 1fr));"}
			minH={"100vh"}
			maxW={"100vw"}
		>
			<Box width={"100%"} height={"100%"}>
				<Box
					height={"100%"}
					width={"100%"}
					backgroundImage={"img/brand.png"}
					backgroundSize={"cover"}
					backgroundPosition={"center"}
					backgroundRepeat={"no-repeat"}
					alt="Brand Image"
				></Box>
			</Box>
			<VStack>
				<VStack spacing={10} marginX={"10"} alignItems={"flex-start"}>
					<Heading size={"xl"}>
						여러분의 커리어 고민,
						<br /> 잠깐 저희에게도 들려주실래요?
					</Heading>
					<Heading size={"large"} color={"gray.600"} fontWeight={400}>
						고려대학교 “스타트업CAMPUSCEO2.0(II)” 수업의
						<br />
						“glassbreaker” 팀이 진행하는 설문조사입니다.
					</Heading>
					<Button
						onClick={(event) => {
							navigate("/personal");
						}}
						colorScheme={"linkedin"}
						size={"lg"}
					>
						네, 좋아요!
					</Button>
				</VStack>
			</VStack>
		</HStack>
	);
};

export default Home;
