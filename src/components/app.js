import { h, Component } from 'preact';

import imgNames from './img-names'

class App extends Component {
	state = { name: 'alles' }

	handleFormChange = (event) => {
		if (event.target.checked) {
			return this.setState({ name: event.target.value })
		}		

		return
	}

	render({}, { name }) {
		const imgPath = `/assets/images/${name}.png`

		return (
			<div id="app">
				<main class="layout">
					<div class="app-image-container">
						<img src={imgPath} class="app-image" />
					</div>
					<div class="app-form-container">
					<form class="app-form">
						{imgNames.map((imgName, i) => (
							<div class="app-form__input-group">
								<input
									class="app-form__checkbox"
									type="checkbox"
									value={imgName}
									id={`name-${i}`}
									onChange={this.handleFormChange}
								/>
								<label
									class="app-form__label"
									for={`name-${i}`}
								>
									{imgName}
								</label>
							</div>
						))}
					</form>
					</div>
				</main>
			</div>
		)
	}
}

export default App;
