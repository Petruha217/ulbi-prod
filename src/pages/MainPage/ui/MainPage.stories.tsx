import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { ThemDecorator } from 'shared/config/storybook/ThemDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}
Dark.decorators = ThemDecorator(Theme.DARK)
