import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/button";
import { Heading, VStack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";

const Contact = ({
	result,
	updateResult,
	canSubmit,
	updateCanSubmit,
	isLoading,
	updateIsLoading,
}) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		updateResult({ ...result, insta: data.insta, phone: data.phone });
		updateCanSubmit(true);
		updateIsLoading(true);
	};

	return (
		<VStack h={"100vh"} justifyContent={"center"} paddingX={10}>
			<VStack alignItems={"flex-start"}>
				<Heading size={"md"} pb={5} maxW={550}>
					답변해주신 분들께 감사한 마음을 담아
					<br /> 3분께 대표로 스타벅스 아메리카노 쿠폰을 보내드리려고 해요.
					<br />
					<br />
					추첨을 원하신다면 인스타그램 아이디 또는 전화번호를 입력해주세요 :)
				</Heading>
				<VStack
					spacing={5}
					as={"form"}
					onSubmit={handleSubmit(onSubmit)}
					minW="100%"
				>
					<FormControl>
						<FormLabel>인스타그램</FormLabel>
						<Input
							variant="flushed"
							placeholder="인스타그램 계정"
							{...register("insta")}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>휴대폰 번호</FormLabel>
						<Input
							variant="flushed"
							placeholder="010-0000-0000"
							{...register("phone")}
						/>
					</FormControl>
					{!isLoading ? (
						<Button
							type={"submit"}
							colorScheme={"linkedin"}
							size={"md"}
							placeSelf={"flex-start"}
						>
							제출하기 &rarr;
						</Button>
					) : null}
					{isLoading ? (
						<Button
							isLoading
							type={"submit"}
							loadingText="제출하는 중"
							colorScheme="linkedin"
							variant="outline"
							spinnerPlacement="end"
							size={"md"}
							placeSelf={"flex-start"}
						>
							제출하기
						</Button>
					) : null}
				</VStack>
			</VStack>
		</VStack>
	);
};

export default Contact;
