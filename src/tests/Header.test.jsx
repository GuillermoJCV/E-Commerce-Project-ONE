import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header.jsx'

describe('Header', () => {
	test("Render correctly", () => {
		const {container} = render(<Header/>)
		const header = container.getElementsByTagName('header')[0]
		expect(header.tagName === 'HEADER').toBeTruthy()
	})
})