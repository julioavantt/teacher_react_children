import { Container } from "./components/Container"

export default function App() {
	return (
		<>
			<Container>
				<h1>Ejemplo children</h1>
				<p>lorem ipsum</p>
			</Container>
			<Container children={<h3>Modo Alternativo</h3>} />
			<Container />
		</>
	)
}
