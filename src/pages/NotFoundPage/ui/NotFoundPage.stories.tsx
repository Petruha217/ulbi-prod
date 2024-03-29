import type { Meta, StoryObj } from '@storybook/react'
import NotFoundPage from './NotFoundPage'
import { ThemDecorator } from 'shared/config/storybook/ThemDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}
Dark.decorators = ThemDecorator(Theme.DARK)
