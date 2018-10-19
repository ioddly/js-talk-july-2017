import { dark as baseTheme } from 'mdx-deck/themes';

// Make theme match code theme background
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: 'rgb(30, 30, 30)'
  }
}
