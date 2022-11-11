import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/button";
import { Heading, VStack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

const Career = ({ result, updateResult }) => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		updateResult({ ...result, career: data.career });
		navigate("/correlation");
	};
	return (
		<VStack h={"100vh"} justifyContent={"center"} paddingX={10}>
			<VStack alignItems={"flex-start"}>
				<Heading size={"md"} pb={5}>
					구체적으로 하고 싶은 일이 무엇인가요?
				</Heading>
				<Text>
					고민중이라면, 생각하고 있는 분야나 취업 유형을 모두 적어주셔도
					좋습니다.
				</Text>
				<VStack
					spacing={5}
					as={"form"}
					onSubmit={handleSubmit(onSubmit)}
					minW="100%"
				>
					<FormControl>
						<Textarea
							placeholder="분야, 취업유형, 직군 등등 자세히 적어주세요!"
							{...register("career", { required: true })}
							defaultValue={result.career ?? result.career}
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
	);
};

export default Career;
