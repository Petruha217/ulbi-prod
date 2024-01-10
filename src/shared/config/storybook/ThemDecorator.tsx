/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"

export const ThemDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`} style={{ width: '100vw' }}>
    <Story />
  </div>
)
