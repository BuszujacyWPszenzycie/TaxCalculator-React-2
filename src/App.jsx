import { useState } from 'react'
import { formatter } from './util/formatter'

import Header from './components/Header'
import Box from './components/Box'
import Input from './components/Input'
import Button from './components/Button'
import Result from './components/Result'

function App() {
	const [calculate, setCalculate] = useState(false)
	const [newClass, setNewClass] = useState(undefined)

	function handleClick(toCalculate, toClass) {
		setCalculate(toCalculate)
		setNewClass(toClass)
	}

	let resultsDiv = ''

	if (calculate) {
		resultsDiv = (
			<Box radius='radius-bottom'>
				<div className='box__wrapper--results'>
					<Result taxType='skala podatkowa' taxAmount={formatter.format(120.1)}></Result>
					<Result taxType='podatek linowy' taxAmount={formatter.format(120.1)}></Result>
					<Result taxType='ryczałt' taxAmount={formatter.format(120.1)}></Result>
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
