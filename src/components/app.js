import { h, Component } from 'preact';

import imgNames from './img-names'

class App extends Component {
	state = { imagesToRender: imgNames }

	handleFormChange = (event) => {
		const { imagesToRender } = this.state
		const alteredImagesToRender = imagesToRender.map(image => {
			if (image.name === event.target.value) {
				return { ...image, isShown: event.target.checked }
			}

			return image
		})

		this.setState({ imagesToRender: alteredImagesToRender })
	}

	render({}, { imagesToRender }) {
		return (
			<div id="app">
				<main class="layout">
					<div class="app-image-container">
						{imagesToRender.map(image => (
							image.isShown
								? <img src={`/assets/images/${image.name}.png`} class="app-image" />
								: ''
						))}
					</div>
					<div class="app-form-container">
					<form class="app-form">
						{imagesToRender.map((image, i) => (
							<div class="app-form__input-group">
								<input
									class="app-form__checkbox"
									type="checkbox"
									value={image.name}
									id={`name-${i}`}
									onChange={this.handleFormChange}
									checked={image.isShown}
								/>
								<label
									class="app-form__label"
									for={`name-${i}`}
								>
									{image.name}
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
