import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { ComponentRender } from 'shared/lib/test/componentRender/componentRender'

describe('Sidebar', () => {
  test('with only first param', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('with toggle', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebarToggle')
    expect(toggleBtn).toBeInTheDocument()
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
