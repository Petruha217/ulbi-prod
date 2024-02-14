/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react"
import { Theme, ThemeProvider } from "app/providers/ThemeProvider"

export const ThemDecorator = (theme: Theme) => (Story: StoryFn) => (
  <ThemeProvider>
    <div className={`app ${theme}`} style={{ width: '100vw' }}>
    <Story />
   </div>
  </ThemeProvider>
)
