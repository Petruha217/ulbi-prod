import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { ComponentRender } from 'shared/lib/test/componentRender/componentRender'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
  test('test render', () => {
    ComponentRender(<Counter/>, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('test increment', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('test decrement', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
