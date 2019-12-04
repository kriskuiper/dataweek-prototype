import { h, Component } from 'preact';

class App extends Component {
	state = { name: 'alles' }

	render() {
		const imgPath = `/assets/images/${this.state.name}.png`

		return (
			<div id="app">
				<img src={imgPath} />
			</div>
		)
	}
}

export default App;
