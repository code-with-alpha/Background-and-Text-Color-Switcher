import { useState } from "react";

function App() {
	const [color, setColor] = useState("pink");
	const [textColor, setTextColor] = useState("indigo");

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="flex justify-center items-center relative top-1/2">
				<div
					className="font-bold relative text-6xl"
					style={{ color: textColor }}
				>
					Hello World
				</div>
			</div>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="my-6 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-2 border-black">
					<button
						className="px-4 outline-none py-1 rounded-lg text-black font-bold"
						style={{ backgroundColor: "cornflowerblue" }}
					>
						Text Colors
					</button>
					<button
						onClick={() => setTextColor("red")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "red" }}
					>
						Red
					</button>
					<button
						onClick={() => setTextColor("blue")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "Blue" }}
					>
						Blue
					</button>
					<button
						onClick={() => setTextColor("green")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "Green" }}
					>
						Green
					</button>
					<button
						onClick={() => setTextColor("purple")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "purple" }}
					>
						Purple
					</button>
					<button
						onClick={() => setTextColor("brown")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "brown" }}
					>
						Brown
					</button>
					<button
						onClick={() => setTextColor("black")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "black" }}
					>
						Black
					</button>
					<button
						onClick={() => setTextColor("indigo")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "indigo" }}
					>
						Indigo
					</button>
					<button
						onClick={() => setTextColor("grey")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "grey" }}
					>
						Grey
					</button>
					<button
						onClick={() => setTextColor("pink")}
						className="px-4 outline-none py-1 rounded-full text-black font-bold"
						style={{ backgroundColor: "pink" }}
					>
						Pink
					</button>
					<button
						onClick={() => setTextColor("yellow")}
						className="px-4 outline-none py-1 rounded-full text-black font-bold"
						style={{ backgroundColor: "yellow" }}
					>
						Yellow
					</button>
				</div>
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-2 border-black">
					<button
						className="px-4 outline-none py-1 rounded-lg text-black font-bold"
						style={{ backgroundColor: "cornflowerblue" }}
					>
						Background Colors
					</button>
					<button
						onClick={() => setColor("red")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "red" }}
					>
						Red
					</button>
					<button
						onClick={() => setColor("blue")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "Blue" }}
					>
						Blue
					</button>
					<button
						onClick={() => setColor("green")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "Green" }}
					>
						Green
					</button>
					<button
						onClick={() => setColor("purple")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "purple" }}
					>
						Purple
					</button>
					<button
						onClick={() => setColor("brown")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "brown" }}
					>
						Brown
					</button>
					<button
						onClick={() => setColor("black")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "black" }}
					>
						Black
					</button>
					<button
						onClick={() => setColor("indigo")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "indigo" }}
					>
						Indigo
					</button>
					<button
						onClick={() => setColor("grey")}
						className="px-4 outline-none py-1 rounded-full text-white font-bold"
						style={{ backgroundColor: "grey" }}
					>
						Grey
					</button>
					<button
						onClick={() => setColor("pink")}
						className="px-4 outline-none py-1 rounded-full text-black font-bold"
						style={{ backgroundColor: "pink" }}
					>
						Pink
					</button>
					<button
						onClick={() => setColor("yellow")}
						className="px-4 outline-none py-1 rounded-full text-black font-bold"
						style={{ backgroundColor: "yellow" }}
					>
						Yellow
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
