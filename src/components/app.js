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

	handleInvert = () => {
		const { imagesToRender } = this.state
		const alteredImagesToRender = imagesToRender.map(image => {
			return { ...image, isShown: !image.isShown }
		})

		this.setState({ imagesToRender: alteredImagesToRender })
	}

	render({}, { imagesToRender }) {
		return (
			<div id="app">
				<main class="layout">
					<div class="app-image-container">
						<img src="/assets/images/background.png" class="app-image" />

						{/* Crying because of the awful pattern here, have to refactor this */}
						{imagesToRender.map(image => {
							if (!image.isShown) return ''

							else if (image.hasExtraClass) {
								return (
									<img 
										src={`/assets/images/${image.name}.png`} 
										class="app-image app-image--is-vague app-image--has-extra-class"
									/>
								)
							} else {
								return (
									<img
										src={`/assets/images/${image.name}.png`}
										class="app-image app-image--is-vague"
									/>
								)
							}
						})}

						<img src="/assets/images/gebied-namen.png" class="app-image" />
					</div>
					<div class="app-form-container">
						<form class="app-form">
							{imagesToRender
								.filter(image => image.name !== 'rustplekken')
								.map((image, i) => (
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
										{image.label}
									</label>
								</div>
							))}
						</form>
						<button onClick={this.handleInvert}>
							invert
						</button>
					</div>
				</main>
			</div>
		)
	}
}

export default App;
