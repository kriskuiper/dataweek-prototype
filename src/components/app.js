import { h, Component } from 'preact';

import AppForm from './app-form'

class App extends Component {
	state = { name: 'geluid-verkeer-1' }

	render({}, { name }) {
		const imgPath = `/assets/images/${name}.png`

		return (
			<div id="app">
				<main class="layout">
					<div class="app-image-container">
						<img src={imgPath} class="app-image" />
					</div>
					<div class="app-form-container">
						<AppForm
							onChange={this.handleChange}
							value={name}
						/>
					</div>
				</main>
			</div>
		)
	}
}

export default App;
