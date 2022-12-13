# 🌱 PlantSwap UIkit

[![Version](https://img.shields.io/npm/v/@plantswap-libs/uikit)](https://www.npmjs.com/package/@plantswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@plantswap-libs/uikit)](https://www.npmjs.com/package/@plantswap-libs/uikit)

PlantSwap UIkit is a set of React components and hooks used to build pages on Plantswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @plantswap-libs/uikit`

## Setup

### Theme

Before using PlantSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@plantswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@plantswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
