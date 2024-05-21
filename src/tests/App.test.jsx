import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import App from '../App.jsx'

describe("App", () => {
	afterEach(cleanup)

	it("Deberia renderizar correctamente", () => {
		render(<App/>)
	})
	it("Deberia renderizar el header", () => {
		render(<App/>)
		screen.getByAltText("Logo")
	})
/*	it("Deberia renderizar el loader", () => {
		render(<App/>)
		screen.getByRole('loader')
	})*/
	it("Deberia renderizar el contenido de la pagina", () => {
		render(<App/>)
		screen.findByRole('main')
	})
	it("Deberia renderizar el HomePage", () => {
		render(<App/>)
		screen.findByText('Sugerencias de Productos')
	})
	it("Deberia renderizar el Login", () => {
		render(<App/>)
		fireEvent(
			screen.getByText("Ingresar"),
			new MouseEvent('click')
			)
		screen.findAllByRole('form')
		// Asegurarnos que solo hayan dos form
	})
})