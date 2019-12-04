import { h, Component } from 'preact'

import imgNames from './img-names'

class AppForm extends Component {
	render() {
		return (
			<form class="app-form">
				{imgNames.map((imgName, i) => (
					<div class="app-form__input-group">
						<input
							class="app-form__checkbox"
							type="checkbox"
							id={`name-${i}`}
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
		)
	}
}

export default AppForm
