import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemDecorator } from 'shared/config/storybook/ThemDecorator'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],
  args: {
    children: 'text',
    to: '/'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}
PrimaryDark.decorators = ThemDecorator(Theme.DARK)

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}
SecondaryDark.decorators = ThemDecorator(Theme.DARK)
