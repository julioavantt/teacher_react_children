import { useState } from "react"

const styles = {
	margin: "20px auto",
	width: "1178px",
	background: "salmon",
	height: "20vh",
	color: "white",
}

export const Container = props => {
	const [count, setCount] = useState(0)
	console.log({ props })

	return (
		<>
			<span>{count}</span>
			<button onClick={() => setCount(ptrv => ptrv + 1)}>Add</button>
			<div style={styles}>{props.children}</div>
		</>
	)
}
