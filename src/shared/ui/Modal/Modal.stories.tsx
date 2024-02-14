import type { Meta, StoryObj } from '@storybook/react'
import { ThemDecorator } from 'shared/config/storybook/ThemDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']

  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet'
  }
}
Dark.decorators = ThemDecorator(Theme.DARK)
