# Accordion Animations

## `animate-accordion-down`

Animation for opening an accordion. This animation slides the accordion content down until it reaches its full height.

> [!NOTE]
> You need to [specify the content height](#setting-content-height) for this animation to work.

<table>
<thead>
<tr>
<th>Class</th>
<th>Styles</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`animate-accordion-down`

</td>
<td>

```css
animation: accordion-down var(--tw-duration, 200ms) ease-out;

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(
      --radix-accordion-content-height,
      var(--bits-accordion-content-height, var(--reka-accordion-content-height, auto))
    );
  }
}
```

</td>
</tr>
</tbody>
</table>

## `animate-accordion-up`

Animation for closing an accordion. This animation slides the accordion content up until it reaches a height of `0`.

> [!NOTE]
> You need to [specify the content height](#setting-content-height) for this animation to work.

<table>
<thead>
<tr>
<th>Class</th>
<th>Styles</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`animate-accordion-up`

</td>
<td>

```css
animation: accordion-up var(--tw-duration, 200ms) ease-out;

@keyframes accordion-up {
  from {
    height: var(
      --radix-accordion-content-height,
      var(--bits-accordion-content-height, var(--reka-accordion-content-height, auto))
    );
  }
  to {
    height: 0;
  }
}
```

</td>
</tr>
</tbody>
</table>

## `accordion-h-*`

This utility sets the height of the accordion content. It is used to ensure that the accordion content has a defined height for the animations to work correctly.

<table>
<thead>
<tr>
<th>Class</th>
<th>Styles</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`accordion-h-<number>`

</td>
<td>

```css
--radix-accordion-content-height: calc(<number> * var(--spacing));
```

</td>
</tr>
<tr>
<td>

`accordion-h-(<custom-property>)`

</td>
<td>

```css
--radix-accordion-content-height: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`accordion-h-[<value>]`

</td>
<td>

```css
--radix-accordion-content-height: <value>;
```

</td>
</tr>
</tbody>
</table>

## Setting content height

Until browser support for [`interpolate-size: allow-keywords`][MDN_Interpolate_Size] is more widespread, a CSS variable is used to define the full height of the accordion content.
The following sections explain how to set the height of the accordion content using different methods.

### Using the `accordion-h-*` utility

You can use the `accordion-h-*` utility to set the height of the accordion content. This utility sets the `--radix-accordion-content-height` CSS variable, which is used by the animations.

```html
<div class="accordion-h-(--abc-accordion-content-height)">...</div>
```

### Using inline styles

```html
<div style="--radix-accordion-content-height: 1.75em">...</div>
```

### Using JavaScript

```js
document
  .getElementById("faq-accordion-1")
  .style.setProperty("--radix-accordion-content-height", "1.75em");
```

### Using Radix (React)

Radix automatically sets the `--radix-accordion-content-height` variable. Just use the accordion component primitive!

```jsx
import { Accordion } from "radix-ui";

export default () => (
  <Accordion.Root>
    <Accordion.Item>
      <Accordion.Header>
        <Accordion.Trigger>...</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>...</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
```

Learn more about Radix' accordion primitive in the [Radix documentation][Radix_Docs].

### Using BitsUI (Svelte)

BitsUI automatically sets the `--bits-accordion-content-height` variable. Just use the headless accordion component primitive!

```svelte
<script>
  import { Accordion } from "bits-ui";
</script>

<Accordion.Root type="single">
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Trigger>...</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

Learn more about BitsUI's accordion primitive in the [BitsUI documentation][Bits_Docs].

### Using Reka (Vue)

Reka automatically sets the `--reka-accordion-content-height` variable. Just use the headless accordion component primitive!

```vue
<script setup>
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "reka-ui";
</script>

<template>
  <AccordionRoot>
    <AccordionItem>
      <AccordionHeader>
        <AccordionTrigger />
      </AccordionHeader>
      <AccordionContent />
    </AccordionItem>
  </AccordionRoot>
</template>
```

Learn more about Reka's accordion primitive in the [Reka documentation][Reka_Docs].

<!-- Links -->

[MDN_Interpolate_Size]: https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size
[Radix_Docs]: https://radix-ui.com/docs/primitives/components/accordion#content
[Bits_Docs]: https://bits-ui.com/docs/components/accordion#content
[Reka_Docs]: https://reka-ui.com/docs/components/accordion#content
