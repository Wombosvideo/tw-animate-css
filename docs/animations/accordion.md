# Accordion Animations

Until browser support for [`interpolate-size`][MDN_Interpolate_Size] is more widespread, a CSS variable is used to define the full height of the accordion content. You can set one of the following classes to the accordion content to set the height:

- `--radix-accordion-content-height` as in the [Radix documentation][Radix_Docs]
- `--bits-accordion-content-height` as in the [BitsUI documentation][Bits_Docs]

## `animate-accordion-down`

Animation for opening an accordion. This animation slides the accordion content down until it reaches its full height.

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
    height: var(--radix-accordion-content-height, var(--bits-accordion-content-height));
  }
}
```

</td>
</tr>
</tbody>
</table>

## `animate-accordion-up`

Animation for closing an accordion. This animation slides the accordion content up until it reaches a height of `0`.

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
    height: var(--radix-accordion-content-height, var(--bits-accordion-content-height));
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

<!-- Links -->

[MDN_Interpolate_Size]: https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size
[Radix_Docs]: https://radix-ui.com/docs/primitives/components/accordion#content
[Bits_Docs]: https://bits-ui.com/docs/components/accordion#content
