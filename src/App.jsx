import { useState, useRef, forwardRef } from 'react'
import { formatter } from './util/formatter'

import Header from './components/Header'
import Box from './components/Box'
import Input from './components/Input'
import Button from './components/Button'
import Result from './components/Result'

function App() {
	const [calculate, setCalculate] = useState(false)
	const [newClass, setNewClass] = useState(undefined)
	const [taxNormal, setTaxNormal] = useState(0)
	const [taxLinear, setTaxLinear] = useState(0)
	const [taxLump, setTaxLump] = useState(0)

	function handleClick(toCalculate, toClass) {
		setCalculate(toCalculate)
		setNewClass(toClass)
		const allInputs = document.querySelectorAll('Input')
		const income = parseFloat(allInputs[0].value) - parseFloat(allInputs[1].value)
		const lumpTaxNumber = parseFloat(allInputs[2].value) / 100
		setTaxNormal(income * 0.12)
		setTaxLinear(income * 0.19)
		setTaxLump(income * lumpTaxNumber)
	}

	let resultsDiv = ''

	if (calculate) {
		resultsDiv = (
			<Box radius='radius-bottom'>
				<div className='box__wrapper--results'>
					<Result taxType='skala podatkowa' taxAmount={formatter.format(taxNormal)}></Result>
					<Result taxType='podatek linowy' taxAmount={formatter.format(taxLinear)}></Result>
					<Result taxType='ryczałt' taxAmount={formatter.format(taxLump)}></Result>
				</div>
			</Box>
		)
	}

	return (
		<>
			<Header></Header>
			<Box radius={newClass}>
				<div className='box__wrapper box__wrapper--top'>
					<Input labelText='przychody'></Input>
					<Input labelText='koszty'></Input>
					<Input labelText='stawka ryczałtu'></Input>
				</div>
				<div className='box__wrapper box__wrapper--bottom'>
					<Button color='green' onClick={() => handleClick(true, 'radius-top')}>
						wylicz
					</Button>
					<Button color='red' onClick={() => handleClick(false, undefined)}>
						wyczyść
					</Button>
				</div>
			</Box>
			{resultsDiv}
		</>
	)
}

export default App
