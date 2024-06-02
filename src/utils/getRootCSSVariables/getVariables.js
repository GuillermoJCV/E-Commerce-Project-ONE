const html = document.getElementsByTagName("html")[0]

function getCssVariables(cssVarName = "") {
	if(typeof cssVarName !== "string" || !cssVarName) throw new TypeError("1st argument must be an string and can't be empty")

	const computedStyles = globalThis.getComputedStyle(html)
	const cssVarValue = computedStyles.getPropertyValue(cssVarName)
	
	if(!cssVarValue) throw new ReferenceError(`${cssVarValue} not found, maybe double hyphen missed (--${cssVarName})`)
	return cssVarValue
}


export {
	getCssVariables
}