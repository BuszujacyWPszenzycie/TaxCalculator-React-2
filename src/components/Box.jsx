export default function Box({ children, radius }) {
	return <div className={`box ${radius}`}>{children}</div>
}
