import { Button } from "@chakra-ui/button";
import { Heading, Text, VStack } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Highlight } from "@chakra-ui/react";

const Intro1 = () => {
	const navigate = useNavigate();
	return (
		<VStack>
			<VStack
				minH={"100vh"}
				justifyContent={"center"}
				spacing={8}
				w={"max-content"}
				maxW={"100vw"}
				px={10}
			>
				<Text fontSize={"2xl"} alignSelf={"flex-start"}>
					<Highlight
						query="부담스러웠나요?"
						styles={{ px: "1", py: "1", bg: "orange.100", fontWeight: "bold" }}
					>
						&bull; 인기 강의의 방대한 커리큘럼과 비싼 가격, 부담스러웠나요?
					</Highlight>
				</Text>
				<Text fontSize={"2xl"} alignSelf={"flex-start"}>
					<Highlight
						query="유경험자와 함께 해보고 싶나요?"
						styles={{ px: "1", py: "1", bg: "orange.100", fontWeight: "bold" }}
					>
						&bull; 대학원 면접 스터디를 유경험자와 함께 해보고 싶나요?
					</Highlight>
				</Text>
				<Text fontSize={"2xl"} alignSelf={"flex-start"} pb={10}>
					<Highlight
						query="기회를 얻기 힘들었나요?"
						styles={{ px: "1", py: "1", bg: "orange.100", fontWeight: "bold" }}
					>
						&bull; 커리어 선배와 커피챗을 해보고 싶은데, 기회를 얻기 힘들었나요?
					</Highlight>
				</Text>
				<Button
					colorScheme={"linkedin"}
					size={"lg"}
					onClick={() => {
						navigate("/intro2");
					}}
				>
					맞아요...
				</Button>
			</VStack>
		</VStack>
	);
};
export default Intro1;