const AppImage = ({ name, alt }) => (
	<img 
		class="app-image"
		alt={alt}
		src={`/assets/${name}.png`}
	/>
)

export default AppImage
