# Collapsible Animations

## `animate-collapsible-down`

Animation for opening a collapsible. This animation slides the collapsible content down until it reaches its full height.

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

`animate-collapsible-down`

</td>
<td>

```css
animation: collapsible-down var(--tw-duration, 200ms) ease-out;

@keyframes collapsible-down {
  from {
    height: 0;
  }
  to {
    height: var(
      --radix-collapsible-content-height,
      var(--bits-collapsible-content-height, var(--reka-collapsible-content-height, auto))
    );
  }
}
```

</td>
</tr>
</tbody>
</table>

## `animate-collapsible-up`

Animation for closing a collapsible. This animation slides the collapsible content up until it reaches a height of `0`.

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

`animate-collapsible-up`

</td>
<td>

```css
animation: collapsible-up var(--tw-duration, 200ms) ease-out;

@keyframes collapsible-up {
  from {
    height: var(
      --radix-collapsible-content-height,
      var(--bits-collapsible-content-height, var(--reka-collapsible-content-height, auto))
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

## Setting content height

Until browser support for [`interpolate-size: allow-keywords`][MDN_Interpolate_Size] is more widespread, a CSS variable is used to define the full height of the collapsible content. You can set one of the following variables to the collapsible content to set the height:

- `--radix-collapsible-content-height` as in the [Radix documentation][Radix_Docs]
- `--bits-collapsible-content-height` as in the [BitsUI documentation][Bits_Docs]
- `--reka-collapsible-content-height` as in the [Reka documentation][Reka_Docs]

Check out the [setting content height](#setting-content-height) section for more information.

### HTML

```html
<div style="--radix-collapsible-content-height: 1.75em">...</div>
```

### JavaScript

```js
document
  .getElementById("faq-accordion-1")
  .style.setProperty("--radix-collapsible-content-height", "1.75em");
```

### Using Radix (React)

Radix automatically sets the `--radix-collapsible-content-height` variable. Just use the collapsible component primitive!

```jsx
import { Collapsible } from "radix-ui";

export default () => (
  <Collapsible.Root>
    <Collapsible.Trigger />
    <Collapsible.Content />
  </Collapsible.Root>
);
```

Learn more about Radix' collapsible primitive in the [Radix documentation][Radix_Docs].

### Using BitsUI (Svelte)

BitsUI automatically sets the `--bits-collapsible-content-height` variable. Just use the headless collapsible component primitive!

```svelte
<script>
  import { Collapsible } from "bits-ui";
</script>

<Collapsible.Root>
	<Collapsible.Trigger />
	<Collapsible.Content />
</Collapsible.Root>
```

Learn more about BitsUI's collapsible primitive in the [BitsUI documentation][Bits_Docs].

### Using Reka (Vue)

Reka automatically sets the `--reka-collapsible-content-height` variable. Just use the headless collapsible component primitive!

```vue
<script setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from "reka-ui";
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger />
    <CollapsibleContent />
  </CollapsibleRoot>
</template>
```

Learn more about Reka's collapsible primitive in the [Reka documentation][Reka_Docs].

<!-- Links -->

[MDN_Interpolate_Size]: https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size
[Radix_Docs]: https://www.radix-ui.com/primitives/docs/components/collapsible#content
[Bits_Docs]: https://bits-ui.com/docs/components/collapsible#content
[Reka_Docs]: https://reka-ui.com/docs/components/collapsible#content
