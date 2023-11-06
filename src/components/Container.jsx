import { useState } from "react"

const styles = {
	margin: "20px auto",
	width: "1178px",
	background: "salmon",
	height: "6vh",
	color: "white",
	padding: "1rem",
}

export const Container = props => {
	const [count, setCount] = useState(0)
	console.log("Vemos que props se recibe en cada llamada del componente", {
		props,
	})

	//! Si damos clic al botón add corroboraremos que cada invocación crea un componente totalmente diferente.

	return (
		<>
			<span>{count}</span>
			<button onClick={() => setCount(prev => prev + 1)}>Add</button>
			<div style={styles}>{props.children}</div>
		</>
	)
}
