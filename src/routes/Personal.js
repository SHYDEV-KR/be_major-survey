import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/button";
import { HStack, Box, Heading, VStack } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useNumberInput } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Radio, RadioGroup } from "@chakra-ui/react";

const Personal = ({ result, updateResult }) => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 24,
			min: 20,
			max: 40,
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	const onSubmit = (data) => {
		updateResult({ ...result, age: data.age, gender: data.gender });
		navigate("/major");
	};

	return (
		<VStack h={"100vh"} justifyContent={"center"} paddingX={10}>
			<VStack alignItems={"flex-start"}>
				<Heading size={"md"} pb={5}>
					나이와 성별을 알려주세요.
				</Heading>
				<VStack spacing={5} as={"form"} onSubmit={handleSubmit(onSubmit)}>
					<FormControl>
						<FormLabel>나이</FormLabel>
						<HStack>
							<Button {...dec}>-</Button>
							<Input
								{...input}
								{...register("age", { required: true })}
								defaultValue={result.age ?? result.age}
							/>
							<Button {...inc}>+</Button>
						</HStack>
					</FormControl>
					<FormControl>
						<FormLabel>성별</FormLabel>
						<RadioGroup defaultValue={result.gender ?? result.gender}>
							<HStack direction="row">
								<Radio value="남자" {...register("gender", { required: true })}>
									남자
								</Radio>
								<Radio value="여자" {...register("gender", { required: true })}>
									여자
								</Radio>
								<Radio value="기타" {...register("gender", { required: true })}>
									기타
								</Radio>
							</HStack>
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

export default Personal;
