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
						<h1 class="layout-title">Van ruis tot rust</h1>
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
						<section class="legend">
							<h2 class="legend-title">Legenda</h2>
							<p class="legend-text">
								<div class="legend-bubble legend-bubble--purple" aria-label="paars"></div>
								<span>= 80db of hoger</span>
							</p>
							<p class="legend-text">
								<div class="legend-bubble legend-bubble--yellow" aria-label="geel"></div>
								<span>= 80db of hoger</span>
							</p>
							<div class="legend-meta">
								<p>Een gesprek is zo'n 60db</p>
								<p>Autoverkeer is 85db</p>
							</div>
						</section>
					</div>
					<div class="app-form-container">
						<form class="app-form">
							<h2 class="app-form__title">Filter tussen de stadsgeluiden</h2>
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
						<div class="rest-button-container">
							<p class="rest-button-helper-text">Of klik hier en...</p>
							<button class="rest-button" onClick={this.handleInvert}>Vind de rust</button>
						</div>
						<p class="author-info">Door: Kris Kuiper, Jesse Ros en Danny Sasse</p>
					</div>
				</main>
			</div>
		)
	}
}

export default App;
