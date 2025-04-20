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
animation: content-down var(--tw-duration, 200ms) ease-out;

@keyframes content-down {
  from {
    height: 0;
  }
  to {
    height: var(
      --radix-accordion-content-height,
      var(
        --bits-accordion-content-height,
        var(--radix-collapsible-content-height, var(--bits-collapsible-content-height, auto))
      )
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
animation: content-up var(--tw-duration, 200ms) ease-out;

@keyframes content-up {
  from {
    height: var(
      --radix-accordion-content-height,
      var(
        --bits-accordion-content-height,
        var(--radix-collapsible-content-height, var(--bits-collapsible-content-height, auto))
      )
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

Until browser support for [`interpolate-size: allow-keywords`][MDN_Interpolate_Size] is more widespread, a CSS variable is used to define the full height of the accordion content. You can set one of the following variables to the accordion content to set the height:

- `--radix-accordion-content-height` as in the [Radix documentation][Radix_Docs]
- `--bits-accordion-content-height` as in the [BitsUI documentation][Bits_Docs]

Check out the [setting content height](#setting-content-height) section for more information.

### HTML

```html
<div style="--radix-accordion-content-height: 1.75em">...</div>
```

### JavaScript

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

<!-- Links -->

[MDN_Interpolate_Size]: https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size
[Radix_Docs]: https://radix-ui.com/docs/primitives/components/accordion#content
[Bits_Docs]: https://bits-ui.com/docs/components/accordion#content
