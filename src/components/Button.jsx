export default function Button({ children, color, onClick }) {
	return (
		<button className={`btn btn__${color}`} onClick={onClick}>
			{children}
		</button>
	)
}
