import { Button } from "@chakra-ui/button";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Image } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/react";

const Feedback = ({ result, updateResult }) => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		updateResult({ ...result, feedback: data.feedback });
		navigate("/contact");
	};
	return (
		<HStack
			display={"grid"}
			gridTemplateColumns={"repeat(auto-fit, minmax(370px, 1fr));"}
			gridTemplateRows={"repeat(auto-fit, minmax(fit-content, 1fr));"}
			minH={"100vh"}
			maxW={"100vw"}
		>
			<VStack>
				<HStack height={"fit-content"} padding={10}>
					<Image src="img/detail.png" alt="example detail" />
				</HStack>
			</VStack>
			<VStack justifyContent={"center"} paddingX={10} pb={20}>
				<VStack alignItems={"flex-start"}>
					<Heading size={"md"} pb={5}>
						커리어 멘토링 펀딩 플랫폼을 만들고 있어요.
						<br />
						저희에게 하고싶은 이야기가 있나요?
					</Heading>
					<Text maxW={500}>
						제공되는 서비스나 기능에 대한 요청 또는 궁금한 점이나 우려되는 점이
						있다면 편하게 이야기해주세요. <br /> (사진은 이해를 돕기 위한
						예시입니다)
					</Text>
					<VStack
						spacing={5}
						as={"form"}
						onSubmit={handleSubmit(onSubmit)}
						minW="100%"
					>
						<FormControl>
							<Textarea
								placeholder="작성하기"
								{...register("feedback", { required: true })}
								defaultValue={result.feedback ?? result.feedback}
							/>
						</FormControl>
						<Button
							type={"submit"}
							colorScheme={"linkedin"}
							size={"md"}
							placeSelf={"flex-start"}
						>
							다음 &rarr;
						</Button>
					</VStack>
				</VStack>
			</VStack>
		</HStack>
	);
};
export default Feedback;
