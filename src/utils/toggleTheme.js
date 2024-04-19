const root = document.querySelector('html')

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

// Obtiene el tema preferido del usuario según su navegador
function getTheme() {
	const preferedTheme = localStorage.getItem("theme")
	if(preferedTheme) {
		return preferedTheme
	} else {
		if(window.matchMedia("(prefers-color-scheme: light)").matches) {
			return LIGHT_THEME
		} else {
			return DARK_THEME
		}
	}
}

// Cambia el tema dependiendo del tema actual y las preferencias de usuario
async function toggleTheme() {
	const currentTheme = getTheme()
	const nextTheme = getTheme() == LIGHT_THEME ? DARK_THEME : LIGHT_THEME
	window.localStorage.setItem("theme", nextTheme)

	root.classList.add(nextTheme)
	root.classList.remove(currentTheme)
}

export {
	getTheme, toggleTheme
}