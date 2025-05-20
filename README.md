# Vermillion

Vermillion is a web component UI library that is:

1. Built with [Lit](https://lit.dev/)
2. Compatible with [Sass](https://sass-lang.com/)
3. Compatible with [Tailwind CSS](https://tailwindcss.com/)
4. Compatible with frameworks like React, Vue, Angular, Svelte, React Native, etc.
5. Supports custom theming
6. Prioritizes accessibility
7. Uses [Vite](https://vitejs.dev/)
8. Uses [Nx](https://nx.dev/)

## Installation

To install Vermillion, you can use npm or yarn:

```bash
npm install vermillion
# or
yarn add vermillion
```

## Usage

To use Vermillion components in your project, you need to import them:

```javascript
import { MyButton } from 'vermillion';
```

Then you can use the components in your HTML:

```html
<my-button>Click me</my-button>
```

## Theming

Vermillion supports custom theming using Sass. You can override the default theme by creating a new Sass file and importing it in your project:

```scss
@import 'vermillion/src/styles/theme.scss';

// Override default theme variables
$primary-color: #ff0000;
$secondary-color: #00ff00;
```

## Tailwind CSS

Vermillion is compatible with Tailwind CSS. You can use Tailwind classes in your components:

```html
<my-button class="bg-blue-500 text-white">Click me</my-button>
```

## Accessibility

Vermillion prioritizes accessibility. All components are built with accessibility in mind and follow best practices for accessible web design.

## Contributing

We welcome contributions to Vermillion! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

Vermillion is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
