import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import App from '../App.jsx'

const mockHref = vi.fn()

describe("App", () => {
	afterEach(cleanup)

	it("Should render", () => {
		render(<App/>)
	})
	it("Should render Header", () => {
		render(<App/>)
		screen.getByAltText("Logo")
	})
})