export default function Input({ children, labelText }) {
	return (
		<div className='input__wrapper'>
			<label className='input__label'>{labelText}</label>
			<input type='number' className='input__box' />
		</div>
	)
}
