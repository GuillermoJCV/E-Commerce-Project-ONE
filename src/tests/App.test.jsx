import { afterEach, describe, expect, it } from 'vitest'
import userEvent from "@testing-library/user-event"
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
	it("Deberia renderizar el contenido de la pagina", async () => {
		render(<App/>)
		await screen.findByRole('main')
	})
	it("Deberia renderizar el HomePage", async () => {
		render(<App/>)
		await screen.findByText('Sugerencias de Productos')
	})
	it("Deberia renderizar la página de productos al dar click", async () => {
		render(<App/>)
		await userEvent.click(screen.getByText("Productos"))
		const element = await screen.findByRole('main')
		expect(element.className).toContain("ProductsPage")
	})
	it("Deberia renderizar la página de contactos al dar click", async () => {
		render(<App/>)
		await userEvent.click(screen.getByText("Contacto"))
		const element = await screen.findByRole('main')
		expect(element.className).toContain("ContactsPage")
	})
/*	it("Deberia renderizar la página de Sobre Nosotros al dar click", async () => {
		render(<App/>)
		await userEvent.click(screen.getByText("Sobre nosotros"))
		const element = await screen.findByRole('main')
		expect(element.className).toContain("AboutUsPage")
		// Añadir la página de sobre nosotros
	})*/
/*	it("Deberia renderizar la página del Login al dar click", async () => {
		render(<App/>)
		await userEvent.click(screen.getByText("Ingresar"))
		const element = await screen.findByRole('main')
		expect(element.className).toContain("LoginPage")
		// Cambiar la clase del main del Login
		// main --> LoginPage
	})*/
})