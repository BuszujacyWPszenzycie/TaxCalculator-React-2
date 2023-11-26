export default function Result({ children, taxType, taxAmount }) {
	return (
		<div className='result__div'>
			<p className='result__p'>{taxType}</p>
			<p className='result__p'>{taxAmount}</p>
		</div>
	)
}
