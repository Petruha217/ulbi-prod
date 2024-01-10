import type { Preview } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import 'app/styles/index.scss'
import { RouterDecorator } from "shared/config/storybook/RouterDecorator"
import { ThemDecorator } from "shared/config/storybook/ThemDecorator"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    ThemDecorator(Theme.LIGHT),
    RouterDecorator
  ]
}

export default preview
