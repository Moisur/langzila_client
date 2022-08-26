import axios from 'axios';
import React, { useState } from 'react';

const Grammer = () => {
  const [text, settext] = useState('Sam are off to garden.');
	const [res, setRes] = useState('');
	const [btnText, setBtnText] = useState('Check');
	/**
	 *
	 *
	 * Check the text for grammar mistakes
	 */
	const checkGrammar =() => {
setBtnText('Checking...');

console.log(text)
const lasttext=JSON.parse(text)
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '157b7f57b0msh5d5f20acfc8da8cp1129e6jsn8ad2b297eedf',
		'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com'
	},
	params: {lasttext, language: 'en-US'}
};

fetch('https://dnaber-languagetool.p.rapidapi.com/v2/check', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
		setBtnText('Check');
	};
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Grammar <span className="text-danger">Checker</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check to see if what you have written is Grammarly correct
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Write/paste any content..."
					autoFocus={true}
					value={text}
					onChange={e => settext(e.target.value)}
				/>
				<div className="flex items-center">
					<button
						className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12"
						onClick={checkGrammar}
					>
						{btnText}
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="See if its correct..."
					readOnly={true}
					value={res}
				/>
			</div>
			<div className="flex flex-col mt-10 justify-end h-36 md:h-24">
				<p className="block mb-10 text-center text-secondary text-xs">
					Made by RapidAPI DevRel Team -{' '}
					<a
						className="hover:text-primary"
						href="https://github.com/RapidAPI/DevRel-Examples-External"
					>
						See more examples like this
					</a>
				</p>
			</div>
		</div>
	);
};

export default Grammer;