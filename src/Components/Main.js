/* eslint-disable no-eval */
import { useState } from "react";
import deleteIcon from "../icons/delete.svg";
import Button from "./Button";

const Main = () => {
	const [value, setValue] = useState("");
	const [result, setResult] = useState("");

	const updateCalc = (calc) => {
		if (
			(!value &&
				(calc === "+" ||
					calc === "-" ||
					calc === "*" ||
					calc === "/" ||
					calc === "%" ||
					calc === ".")) ||
			((calc === "+" ||
				calc === "-" ||
				calc === "*" ||
				calc === "/" ||
				calc === "%" ||
				calc === ".") &&
				(value.slice(-1) === "+" ||
					value.slice(-1) === "-" ||
					value.slice(-1) === "*" ||
					value.slice(-1) === "/" ||
					value.slice(-1) === "%" ||
					value.slice(-1) === ".")) ||
			(calc === ")" && !value.includes("("))
		) {
			return;
		}

		setValue(value + calc);
	};
	const deleteValue = () => {
		setValue("");
		setResult("");
	};
	const sliceValue = () => {
		if (value) {
			setValue(value.substring(0, value.length - 1));
		}
	};
	return (
		<div className='w-[300px] sm:w-[414px] h-[782px] bg-black rounded-[13px]'>
			<div className='w-full h-[200px] flex flex-col items-end justify-end p-[20px] '>
				<p className='text-[#828A93] text-[36px] font-medium'>
					{(value.length > 14 ? value.slice(0, 14) : value) || "0"}
				</p>
				<p className='text-[#EAEBED] text-[40px] font-bold'>
					{(result.split("").includes(".")
						? String(result).slice(0, 4)
						: result) || "0"}
				</p>
			</div>
			<div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-[10px]'></div>
			<div className='mt-[24px] pr-[24px] w-full h-[30px] flex flex-col items-end justify-end'>
				<button onClick={sliceValue} className='h-fit w-fit bg-transparent'>
					<img src={deleteIcon} alt='delete' />
				</button>
			</div>
			<div className='w-[260px] sm:w-[374px] h-[455px] m-[20px] flex flex-col gap-[14px]'>
				<div className='w-[full] h-[83px] flex gap-[14px]'>
					<button
						onClick={() => deleteValue()}
						className={`w-[83px] h-[83px] bg-[#2E3A48] rounded-[9px] cursor-pointer hover:bg-[#464b50] flex flex-col`}>
						<div className='text-[#EAEBED] text-[26px] font-bold text-center pt-[21px] bg-transparent'>
							C
						</div>
					</button>
					<Button value={"("} color={"#2E3A48"} updateCalc={updateCalc} />
					<Button value={")"} color={"#2E3A48"} updateCalc={updateCalc} />
					<Button value={"/"} color={"#6344D4"} updateCalc={updateCalc} />
				</div>
				<div className='w-[full] h-[83px] flex gap-[14px]'>
					<Button value={7} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={8} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={9} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={"*"} color={"#6344D4"} updateCalc={updateCalc} />
				</div>
				<div className='w-[full] h-[83px] flex gap-[14px]'>
					<Button value={4} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={5} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={6} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={"-"} color={"#6344D4"} updateCalc={updateCalc} />
				</div>
				<div className='w-[full] h-[83px] flex gap-[14px]'>
					<Button value={1} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={2} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={3} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={"+"} color={"#6344D4"} updateCalc={updateCalc} />
				</div>
				<div className='w-[full] h-[83px] flex gap-[14px]'>
					<Button value={0} color={"#171C22"} updateCalc={updateCalc} />
					<Button value={"."} color={"#6344D4"} updateCalc={updateCalc} />
					<button
						onClick={() => setResult(eval(value).toString())}
						className={`w-[83px] h-[83px] bg-[#2E3A48] rounded-[9px] cursor-pointer hover:bg-[#464b50] flex flex-col`}>
						<div className='text-[#EAEBED] text-[26px] font-bold text-center pt-[21px] bg-transparent'>
							=
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
