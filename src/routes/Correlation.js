import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/button";
import { HStack, Box, Heading, VStack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Radio, RadioGroup } from "@chakra-ui/react";

const Correlation = ({ result, updateResult }) => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		updateResult({ ...result, correlation: data.correlation });
		navigate("/needs");
	};
	return (
		<VStack h={"100vh"} justifyContent={"center"} paddingX={10}>
			<VStack alignItems={"flex-start"}>
				<Heading size={"md"} pb={5}>
					하고 싶은 일이 전공과 얼마나 연관되어 있다고 생각하시나요?
				</Heading>
				<VStack
					spacing={5}
					as={"form"}
					onSubmit={handleSubmit(onSubmit)}
					minW="100%"
				>
					<FormControl>
						<RadioGroup defaultValue={result.correlation ?? result.correlation}>
							<VStack w={"100%"} alignItems={"flex-start"}>
								<Radio
									value="0"
									{...register("correlation", { required: true })}
								>
									0 : 전혀 관련 없음
								</Radio>
								<Radio
									value="1"
									{...register("correlation", { required: true })}
								>
									1
								</Radio>
								<Radio
									value="2"
									{...register("correlation", { required: true })}
								>
									2
								</Radio>
								<Radio
									value="3"
									{...register("correlation", { required: true })}
								>
									3
								</Radio>
								<Radio
									value="4"
									{...register("correlation", { required: true })}
								>
									4
								</Radio>
								<Radio
									value="5"
									{...register("correlation", { required: true })}
								>
									5 : 매우 관련 있음
								</Radio>
							</VStack>
						</RadioGroup>
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

export default Correlation;
