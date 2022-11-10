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
import { useEffect, useState } from "react";

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

	const updateResult = (result) => {
		setResult(result);
	};

	useEffect(() => {
		console.log(result);
	}, [result]);

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
				element={<Contact result={result} updateResult={updateResult} />}
			/>
		</Routes>
	);
}
export default App;
