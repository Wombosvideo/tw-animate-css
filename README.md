# tw-animate-css

[![npm version](https://img.shields.io/npm/v/tw-animate-css?color=red&logo=npm)](https://www.npmjs.com/package/tw-animate-css)
[![npm downloads](https://img.shields.io/npm/dt/tw-animate-css?color=red&logo=npm)](https://www.npmjs.com/package/tw-animate-css)
[![MIT license](https://img.shields.io/github/license/Wombosvideo/tw-animate-css)]()
[![GitHub stars](https://img.shields.io/github/stars/Wombosvideo/tw-animate-css?color=blue)](https://github.com/Wombosvideo/tw-animate-css)

A collection of Tailwind CSS v4.0 utilities for creating beautiful animations. Includes ready-to-use animations `accordion-down`, `accordion-up` and `caret-blink`, as well as a set of utilities for creating your own animations.

---

This package is a replacement for [`tailwindcss-animate`][Original_Plugin_GitHub]. It embraces the new [CSS-first architecture][TailwindCSS_Custom_Utilities], providing a pure CSS solution for adding animation capabilities to your Tailwind CSS project without relying on the legacy JavaScript plugin system or having to define all keywords from scratch.

## Table of Contents

- [Getting Started](#getting-started)
  - [NPM](#npm)
  - [Manual Download](#manual-download)
- [Usage](#usage)
  - [Enter/Exit Animations](#enterexit-animations)
    - [Base Classes](#base-classes)
    - [Parameter Classes](#parameter-classes)
    - [Transform Classes](#transform-classes)
  - [Ready-to-Use Animations](#ready-to-use-animations)
- [Examples](#examples)
- [Notes on Compatibility](#notes-on-compatibility)

## Getting Started

### NPM

1. Install the package with `npm`:

   ```sh
   npm install -D tw-animate-css
   ```

2. Add the following line to your `app.css` or `globals.css` file:

   ```css
   @import "tw-animate-css";
   ```

3. Start using the animations!

   ```html
   <!-- Add an animated fade and zoom entrance -->
   <div class="animate-in fade-in zoom-in">...</div>

   <!-- Add an animated slide to top-left exit -->
   <div class="animate-out slide-out-to-top slide-out-to-left">...</div>

   <!-- Control animation duration -->
   <div class="... duration-300">...</div>

   <!-- Control animation delay -->
   <div class="... delay-150">...</div>

   <!-- And so much more! -->
   ```

> [!NOTE]
> The above guide works for esbuild, Vite and probably other bundlers too. If you are using a different bundler, the syntax may differ. [Let me know][Create_Issue] how it works and I'll update the documentation.

### Manual Download

1. Download the [`tw-animate.css`][CSS_File]
   file from GitHub and place it next to your `app.css` or `globals.css` file.
2. Add the following line to your `app.css` or `globals.css` file:

   ```css
   @import "./tw-animate.css";
   ```

3. Start using the animations!

   ```html
   <!-- Add an animated fade and zoom entrance -->
   <div class="animate-in fade-in zoom-in">...</div>

   <!-- Add an animated slide to top-left exit -->
   <div class="animate-out slide-out-to-top slide-out-to-left">...</div>

   <!-- Control animation duration -->
   <div class="... duration-300">...</div>

   <!-- Control animation delay -->
   <div class="... delay-150">...</div>

   <!-- And so much more! -->
   ```

## Usage

> [!NOTE]
> The documentation is still in progress and **not fully aligned with the current implementation**. Please refer to the [original documentation][Original_Plugin_Docs] if anything is missing.

### Enter/Exit Animations

To keep the README concise, I'll define a few variables:

- `<io>`: Specify the type of animation. This can be `in` for enter or `out` for exit animations.
- `<dir>`: Specify the direction of the slide. This can be `in-from-top`, `in-from-bottom`, `in-from-left`, `in-from-right`, `out-to-top`, `out-to-bottom`, `out-to-left` or `out-to-right`.
- `*`: Specify a value to apply. See list of possible values.

#### Base Classes

| Class          | Description                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| `animate-<io>` | Base class for enter/exit animations. This needs to be applied in order for enter/exit animations to work. |

#### Parameter Classes

To customize the animation parameters, use the following classes:

| Class         | Description                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `duration-*`  | Sets [`animation-duration`][MDN_Duration]. Uses `--tw-duration`, see [Tailwind CSS docs][TailwindCSS_Duration]. Defaults to `duration-150`. |
| `ease-*`      | Sets [`animation-timing-function`][MDN_Ease]. Uses `--tw-ease`, see [Tailwind CSS docs][TailwindCSS_Easing]. Defaults to `ease-[ease]`.     |
| `delay-*`     | Sets [`animation-delay`][MDN_Delay]. Possible values: Any `<number>` or any other `[<value>]`.                                              |
| `repeat-*`    | Sets [`animation-iteration-count`][MDN_Repeat]. Possible values: Any `<number>` or `infinite`.                                              |
| `direction-*` | Sets [`animation-direction`][MDN_Direction]. Possible values: `normal`, `reverse`, `alternate` or `alternate-reverse`.                      |
| `fill-mode-*` | Sets [`animation-fill-mode`][MDN_Fill_Mode]. Possible values: `none`, `forwards`, `backwards` or `both`.                                    |
| `running`     | Sets [`animation-play-state`][MDN_Play_State] to `running`.                                                                                 |
| `paused`      | Sets [`animation-play-state`][MDN_Play_State] to `paused`.                                                                                  |

#### Transform Classes

| Syntax          | Description                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `fade-<io>`     | Fades the element in from or out to `opacity: 0`.                                                                                |
| `fade-<io>-*`   | Fades the element in from or out to the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.  |
| `zoom-<io>`     | Zooms the element in from or out to `scale3D(0,0,0)`.                                                                            |
| `zoom-<io>-*`   | Zooms the element in from or out to the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.  |
| `spin-<io>`     | Spins the element in from or out to `rotate(30deg)`.                                                                             |
| `spin-<io>-*`   | Spins the element in from or out to the specified value. Possible values: Any `<number>` (degrees) or any other `[<value>]`.     |
| `slide-<dir>`   | Slides the element in from or out to the specified direction (`100%`).                                                           |
| `slide-<dir>-*` | Slides the element in from or out to the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`. |

### Ready-to-Use Animations

| Class            | Description                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `accordion-down` | Accordion down animation. Requires `--radix-accordion-content-height` or `--bits-accordion-content-height` to be set to the content's height. |
| `accordion-up`   | Accordion up animation. Requires `--radix-accordion-content-height` or `--bits-accordion-content-height` to be set to the content's height.   |
| `caret-blink`    | Blinking animation for caret/cursor.                                                                                                          |

## Examples

**Basic usage:**

```html
<div class="animate-in fade-in slide-in-from-top-8 duration-500">
  Fade in from 0% opacity,<br />
  slide from top by 8 spacing units (2rem),<br />
  with a 500ms duration.
</div>
```

**Advanced usage:**

```html
<div
  class="data-[state=show]:animate-in data-[state=hide]:animate-out fade-in slide-in-from-top-8 fade-out slide-out-to-top-8 duration-500"
  data-state="show"
>
  <p>
    If the element has the <code>data-state="show"</code> attribute,<br />
    fade in from 0% opacity,<br />
    slide from top by 8 spacing units (2rem),<br />
    with a 500ms duration.
  </p>
  <p>
    If the element has the <code>data-state="hide"</code> attribute,<br />
    fade out to 0% opacity,<br />
    slide to top by 8 spacing units (2rem),<br />
    with a 500ms duration.
  </p>
</div>
```

## Notes on Compatibility

> [!NOTE]
> I use only a small portion of the original plugin, so it might not be a 100% compatible drop-in replacement. If you notice any inconsistencies, feel free to contribute to this repository by opening a pull-request.

<!-- Links -->

[Original_Plugin_GitHub]: https://github.com/jamiebuilds/tailwindcss-animate
[Original_Plugin_Docs]: https://github.com/jamiebuilds/tailwindcss-animate/blob/main/README.md
[TailwindCSS_Custom_Utilities]: https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities
[TailwindCSS_Duration]: https://tailwindcss.com/docs/transition-duration
[TailwindCSS_Easing]: https://tailwindcss.com/docs/transition-timing-function
[TailwindCSS_Delay]: https://tailwindcss.com/docs/transition-delay
[MDN_Duration]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
[MDN_Ease]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
[MDN_Delay]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
[MDN_Repeat]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
[MDN_Direction]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
[MDN_Fill_Mode]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
[MDN_Play_State]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
[Create_Issue]: https://github.com/Wombosvideo/tw-animate-css/issues/new
[CSS_File]: https://raw.githubusercontent.com/Wombosvideo/tw-animate-css/refs/heads/main/src/tw-animate.css
