# react-square-text [![NPM version](https://img.shields.io/npm/v/react-square-text.svg?style=flat)](https://www.npmjs.com/package/react-square-text) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](<[LICENSE](https://github.com/angelabenavente/react-square-text/LICENSE)>) [![NPM total downloads](https://img.shields.io/npm/dt/react-square-text.svg?style=flat)](https://www.npmjs.com/package/react-square-text)

<!-- [![NPM monthly downloads](https://img.shields.io/npm/dm/react-square-text.svg?style=flat)](https://www.npmjs.com/package/react-square-text)-->

> React utility that displays a given text in a square pattern. The square will have a side size given in px. Each letter of the text is positioned around the square, with a calculated rotation angle to ensure the text fits perfectly.

<!-- `react-square-text` is a tiny library that works in all Javascript environments. -->

---

## 🚀 Features

- **Easy text arrangement**: Distributes the letters of a text string in a square layout within an HTML container.
- **Customizable text appearance**: Allows customization of text color, font, and font weight.
  Precise positioning: Uses a relative-positioned container and absolutely-positioned elements to adjust text placement precisely.
- **Precise positioning**: Uses a relative-positioned container and absolutely-positioned elements to adjust text placement precisely.
- **Support for custom fonts**: Allows you to specify a custom font if needed, in addition to standard monospaced fonts.
- **ESM and CJS support**: Fully compatible with modern module systems.

---

## 🚀 Parameters

- **text (string)**: The text to be displayed in a square pattern.
- **radius (number)**: The radius of the square where the letters will be placed (optional).
- **id (optional string)**: The ID of the HTML container element where the square text will be inserted.
- **options (optional object)**:
  - **color (string, default #000000)**: The text color.
  - **fontFamily (string, default "Menlo, monospace")**: he font to be used. It can be one of the following monospaced fonts:'Menlo', 'Courier New', 'Consolas', 'Lucida Console', 'Monaco', 'monospace', or "customFont" if a custom font is desired.
  - **fontWeight (number, default 400)**: The weight of the font.
  - **color (string, default #000000)**: The text color.

---

## 📦 Installation

You can install `react-square-text` using your favorite package manager:

```
# Using pnpm
pnpm add react-square-text

# Using npm
npm install react-square-text

# Using yarn
yarn add react-square-text
```

---

## 🌟 Usage

Here's how to use the library in your project:

### Import the library

```
// CommonJS
const SquareText = require('react-square-text');

// ES Modules
import SquareText from 'react-square-text';
```

### Basic example

```
import SquareText from 'react-square-text';

 <SquareText
    text="This words are being displayed as square "
    id="container2"
    options={{
      color: "black",
      fontFamily: "Menlo",
      fontWeight: 700,
      fontSize: 16,
    }}
    size={420}
  />
```

## Result

<img width="490" alt="react-square-text_basic-example" src="https://github.com/user-attachments/assets/8b48569e-c47b-4016-8964-011ac3ac7210" />

---

## 🛠️ Development

If you want to contribute or run the project locally, follow these steps:

### Clone the repository

```
git clone https://github.com/angelabenavente/react-square-text.git
cd react-square-text
```

### Install dependencies

```
npm install
```

### Run tests

```
npm run test
```

### Lint the code

```
npm run eslint
```

---

## 🔄 Changelog

See [CHANGELOG.md](https://github.com/angelabenavente/react-square-text/blob/main/CHANGELOG.md) for a detailed history of changes.

---

## 💡 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Submit a pull request with a clear description of the changes.

See [CONTRIBUTING.md](https://github.com/angelabenavente/react-square-text/blob/main/CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/angelabenavente/react-square-text/blob/main/LICENSE). Created with ❤️ by [Ángela Benavente](https://github.com/angelabenavente).

---

## 🌍 Links

- **GitHub Repository:** [https://github.com/angelabenavente/react-square-text](https://github.com/angelabenavente/react-square-text)

- **NPM Package:** [https://www.npmjs.com/package/react-square-text](https://www.npmjs.com/package/react-square-text)
