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
import { useNavigate } from "react-router-dom";

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
	const [isLoading, setIsLoading] = useState(false);

	const updateResult = (result) => {
		setResult(result);
	};

	const updateCanSubmit = (result) => {
		setCanSubmit(result);
	};

	const updateIsLoading = (result) => {
		setIsLoading(result);
	};

	const navigate = useNavigate();

	useEffect(() => {
		const fetchResponse = async () => {
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(result),
			};
			const response = await fetch(
				"https://be-major-survey-api-server.onrender.com/api/v1/submit",
				options
			);
			const resp = await response.json();
			setIsLoading(false);
			if (resp.result === "200") navigate("/bye");
			else console.log(resp);
		};
		if (canSubmit) {
			fetchResponse();
			setCanSubmit(false);
		}
	}, [canSubmit]);

	return (
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
				element={<Correlation result={result} updateResult={updateResult} />}
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
						canSubmit={canSubmit}
						updateCanSubmit={updateCanSubmit}
						isLoading={isLoading}
						updateIsLoading={updateIsLoading}
					/>
				}
			/>
			<Route path="/bye" element={<Bye />} />
		</Routes>
	);
}
export default App;
