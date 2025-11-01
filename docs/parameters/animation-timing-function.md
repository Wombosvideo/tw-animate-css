# Animation Timing Function

## `ease-*`

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

`ease-linear`

</td>
<td>

```css
animation-timing-function: linear;
```

</td>
</tr>
<tr>
<td>

`ease-in`

</td>
<td>

```css
animation-timing-function: var(--ease-in); /* cubic-bezier(0.4, 0, 1, 1) */
```

</td>
</tr>
<tr>
<td>

`ease-out`

</td>
<td>

```css
animation-timing-function: var(--ease-out); /* cubic-bezier(0, 0, 0.2, 1) */
```

</td>
</tr>
<tr>
<td>

`ease-in-out`

</td>
<td>

```css
animation-timing-function: var(--ease-in-out); /* cubic-bezier(0.4, 0, 0.2, 1) */
```

</td>
</tr>
<tr>
<td>

`ease-initial`

</td>
<td>

```css
animation-timing-function: initial;
```

</td>
</tr>
<tr>
<td>

`ease-(<custom-property>)`

</td>
<td>

```css
animation-timing-function: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`ease-[<value>]`

</td>
<td>

```css
animation-timing-function: <value>;
```

</td>
</tr>
</tbody>
</table>

> [!NOTE]
> This utility is not defined in `tw-animate-css` and is included only for completeness. It uses the `--tw-ease` variable to apply the timing function. Check out the [Tailwind CSS documentation][TailwindCSS_Easing] to see the actual implementation.

<!-- Links -->

[TailwindCSS_Easing]: https://tailwindcss.com/docs/transition-timing-function
