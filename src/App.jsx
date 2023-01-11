import { useState } from "react";

function App() {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	const clearData = () => {
		setInput("");
		setResult("");
	};

	const romanToInt = (roman) => {
		const romanToIntMap = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000,
		};
		let num = 0;

		for (let i = 0; i < roman.length; i++) {
			const current = romanToIntMap[roman[i]];
			const next = romanToIntMap[roman[i + 1]];
			if (current < next) {
				num -= current;
			} else {
				num += current;
			}
		}
		// Ensures that NaN doesnt show up when inputting letters that are not numerals or also makes sure that 0 doesnt show up when no letter inputted
		if (num != num || num == "") {
			return;
		}
		setResult(num);
	};

	const intToRoman = (num) => {
		let roman = "";
		const symbols = [
			"M",
			"CM",
			"D",
			"CD",
			"C",
			"XC",
			"L",
			"XL",
			"X",
			"IX",
			"V",
			"IV",
			"I",
		];
		const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

		for (let i = 0; i < values.length; i++) {
			while (num >= values[i]) {
				roman += symbols[i];
				num -= values[i];
			}
		}

		setResult(roman);
	};

	return (
		<div className="calculator">
			<div className="display">
				<div className="input">
					{/* https://upmostly.com/tutorials/react-onchange-events-with-examples */}
					{/* https://sebhastian.com/react-onchange/ */}
					<input
						type="text"
						value={input}
						onChange={handleInputChange}
						id="input-field"
					/>
				</div>
				<div className="result">
					<div className="result-text">Result:</div>
					<div className="result-value">{result}</div>
				</div>
			</div>

			<div className="conversion">
				<button className="buttons" onClick={() => romanToInt(input)}>
					Roman to Integer
				</button>
				<button className="buttons" onClick={() => intToRoman(input)}>
					Integer to Roman
				</button>
			</div>
			<div className="clear">
				<button className="buttons clear" onClick={() => clearData()}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default App;
