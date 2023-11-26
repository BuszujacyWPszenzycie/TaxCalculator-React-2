export default function Input({ children, labelText, ref }) {
	return (
		<div className='input__wrapper'>
			<label className='input__label'>{labelText}</label>
			<input type='number' className='input__box' ref={ref} />
		</div>
	)
}
