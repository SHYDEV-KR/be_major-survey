import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Personal from "./routes/Personal";
import Major from "./routes/Major";
import Career from "./routes/Career";
import Correlation from "./routes/Correlation";
import Needs from "./routes/Needs";
import Intro1 from "./routes/Intro1";
import Intro2 from "./routes/Intro2";
import Feedback from "./routes/Feedback";
import Contact from "./routes/Contact";
import Bye from "./routes/Bye";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import { VStack } from "@chakra-ui/layout";

function App() {
	const [result, setResult] = useState({
		age: "",
		gender: "",
		major: "",
		career: "",
		correlation: "",
		needs: "",
		feedback: "",
		insta: "",
		phone: "",
	});
	const [canSubmit, setCanSubmit] = useState(false);
	const [isSubmitLoading, setIsSubmitLoading] = useState(false);

	const updateResult = (result) => {
		setResult(result);
	};

	const updateCanSubmit = (result) => {
		setCanSubmit(result);
	};

	const updateIsSubmitLoading = (result) => {
		setIsSubmitLoading(result);
	};

	const navigate = useNavigate();
	const toast = useToast();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchResponse = async () => {
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(result),
			};
			const timeoutId = setTimeout(() => {
				if (isSubmitLoading) {
					toast({
						title: "잠에 든 서버 깨우는 중... 😴🥱 ",
						description: "잠에서 깨는 즉시 처리할게요!",
						status: "info",
						duration: 12000,
						isClosable: true,
					});
				}
			}, 5500);
			const response = await fetch(
				"https://be-major-survey-api-server.onrender.com/api/v1/submit",
				options
			);
			const resp = await response.json();
			setIsSubmitLoading(false);
			clearTimeout(timeoutId);
			if (resp.result === "200") {
				toast({
					title: "제출 성공",
					description: "응답을 잘 받았어요!",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				window.localStorage.setItem("submit", "true");
				navigate("/bye");
			} else {
				toast({
					title: "제출 실패",
					description: "동시 응답이 너무 많은가봐요, 다시 시도해주세요.",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
				navigate("/contact");
				console.log(resp);
			}
		};
		if (canSubmit && window.localStorage.getItem("submit") !== "true") {
			fetchResponse();
			setCanSubmit(false);
		}
	}, [canSubmit]);

	const cacheImages = async (srcArray) => {
		const promises = await srcArray.map((src) => {
			return new Promise((resolve, reject) => {
				const img = new Image();

				img.src = src;
				img.onload = resolve();
				img.onerror = reject();
			});
		});
		await Promise.all(promises);
		setIsLoading(false);
	};

	useEffect(() => {
		const imgs = [
			"be_major-survey/img/brand.png",
			"be_major-survey/img/byeImage.png",
			"be_major-survey/img/detail.png",
			"be_major-survey/img/list.png",
		];

		cacheImages(imgs);

		if (window.localStorage.getItem("submit") === "true") {
			navigate("/bye");
		} else {
			navigate("/");
		}
	}, []);

	return (
		<>
			{isLoading ? (
				<VStack></VStack>
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/personal"
						element={<Personal result={result} updateResult={updateResult} />}
					/>
					<Route
						path="/major"
						element={<Major result={result} updateResult={updateResult} />}
					/>
					<Route
						path="/career"
						element={<Career result={result} updateResult={updateResult} />}
					/>
					<Route
						path="/correlation"
						element={
							<Correlation result={result} updateResult={updateResult} />
						}
					/>
					<Route
						path="/needs"
						element={<Needs result={result} updateResult={updateResult} />}
					/>
					<Route path="/intro1" element={<Intro1 />} />
					<Route path="/intro2" element={<Intro2 />} />
					<Route
						path="/feedback"
						element={<Feedback result={result} updateResult={updateResult} />}
					/>
					<Route
						path="/contact"
						element={
							<Contact
								result={result}
								updateResult={updateResult}
								updateCanSubmit={updateCanSubmit}
								updateIsSubmitLoading={updateIsSubmitLoading}
								isSubmitLoading={isSubmitLoading}
							/>
						}
					/>
					<Route path="/bye" element={<Bye />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			)}
		</>
	);
}
export default App;
