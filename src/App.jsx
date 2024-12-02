import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
	const [color, setColor] = useState("olive");

	function red() {
		setColor("red");
	}
	function Blue() {
		setColor("blue");
	}
	function Green() {
		setColor("green");
	}
	return (
		<>
			<div
				className="w-screen h-screen"
				style={{ backgroundColor: color }}
			></div>
			<div className="flex flex-wrap justify-center align-middle fixed bottom-10 inset-x-0">
				<div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white p-4 rounded-md">
					<button
						className="bg-red-600 text-white px-5 outline-none rounded-full"
						onClick={red}
					>
						Red
					</button>
					<button
						className="bg-blue-700 text-white px-5 outline-none rounded-full"
						onClick={Blue}
					>
						Blue
					</button>
					<button
						className="bg-green-700 text-white px-5 outline-none rounded-full"
						onClick={Green}
					>
						Green
					</button>
				</div>
			</div>
			{/* <h1 className="bg-slate-300 rounded-xl p-5">Hello World</h1>; */}
			{/* <Card name="Test" btnText="Click me"></Card> */}
			{/* <Card name="Samiya" btnText="Know more"></Card> */}
		</>
	);
}

export default App;
