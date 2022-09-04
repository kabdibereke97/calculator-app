const Button = ({ value, color, updateCalc }) => {
	return (
		<button
			onClick={() => updateCalc(value)}
			className={`w-[83px] h-[83px] bg-[${color}] rounded-[9px] cursor-pointer hover:bg-[#464b50] flex flex-col`}>
			<div className='text-[#EAEBED] text-[26px] font-bold text-center pt-[21px] bg-transparent'>
				{value === "*" ? "X" : value}
			</div>
		</button>
	);
};

export default Button;
