/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { getTheme } from "../utils/toggleTheme.js"

const ThemeContext = createContext(getTheme())

function Theme({children}) {
	const [theme, setTheme] = useState(getTheme())

	return (
		<ThemeContext.Provider value={theme, setTheme}>
			{children}
		</ThemeContext.Provider>
	)
}

export default Theme