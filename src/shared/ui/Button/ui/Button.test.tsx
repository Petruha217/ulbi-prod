import { Button, ButtonTheme } from "./Button"
import { render, screen } from '@testing-library/react'

describe('first block', () => {
  test('first block', () => {
    render(<Button className={ButtonTheme.CLEAR}>TEST</Button>)
    const btn = screen.getByText('TEST')
    // expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('clear')
    screen.debug()
  })
})
