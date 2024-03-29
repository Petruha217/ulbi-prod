import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemDecorator } from 'shared/config/storybook/ThemDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}
Dark.decorators = ThemDecorator(Theme.DARK)
