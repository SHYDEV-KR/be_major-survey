import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/button";
import { Heading, VStack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/react";

const Needs = ({ result, updateResult }) => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		updateResult({ ...result, needs: data.needs });
		navigate("/intro1");
	};
	return (
		<VStack h={"100vh"} justifyContent={"center"} paddingX={10}>
			<VStack alignItems={"flex-start"}>
				<Heading size={"md"} pb={5}>
					커리어를 고민하는 과정에서 가장 고민되는 것과 가장 필요한 것이
					무엇인가요?
				</Heading>
				<Text>‘이런 게 있으면 좋을 텐데’와 같은 이야기도 좋아요!</Text>
				<VStack
					spacing={5}
					as={"form"}
					onSubmit={handleSubmit(onSubmit)}
					minW="100%"
				>
					<FormControl>
						<Textarea
							placeholder="무엇이 있었으면 좋겠다..."
							{...register("needs", { required: true })}
							defaultValue={result.needs ?? result.needs}
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

export default Needs;
