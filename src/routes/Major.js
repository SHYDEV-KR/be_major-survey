import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/button";
import { HStack, Box, Heading, VStack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";

const Major = ({ result, updateResult }) => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		updateResult({ ...result, major: data.major });
		navigate("/career");
	};
	return (
		<VStack h={"100vh"} justifyContent={"center"} paddingX={10}>
			<VStack alignItems={"flex-start"}>
				<Heading size={"md"} pb={5}>
					전공이 무엇인가요?
				</Heading>
				<Text>
					제2전공(복수전공, 융합전공, ...)을 하고 있다면 함께 적어주세요.
				</Text>
				<VStack
					spacing={5}
					as={"form"}
					onSubmit={handleSubmit(onSubmit)}
					minW="100%"
				>
					<FormControl>
						<Input
							variant="flushed"
							placeholder="ex) 경제학 / 경영학"
							{...register("major", { required: true })}
							defaultValue={result.major ?? result.major}
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

export default Major;
