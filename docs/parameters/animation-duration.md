# Animation Duration

## `animation-duration-*`

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

`animation-duration-<number>`

</td>
<td>

```css
animation-duration: <number>ms;
```

</td>
</tr>
<tr>
<td>

`animation-duration-initial`

</td>
<td>

```css
animation-duration: initial;
```

</td>
</tr>
<tr>
<td>

`animation-duration-(<custom-property>)`

</td>
<td>

```css
animation-duration: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`animation-duration-[<value>]`

</td>
<td>

```css
animation-duration: <value>;
```

</td>
</tr>
</tbody>
</table>

## `duration-*`

> [!CAUTION]
> Using this utility to set `animation-duration` is deprecated and support will be removed in a future version. This is because with the old approach it wasn't possible to set different durations for transitions and animations.

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

`duration-<number>`

</td>
<td>

```css
--tw-duration: <number>ms;
```

</td>
</tr>
<tr>
<td>

`duration-initial`

</td>
<td>

```css
--tw-duration: initial;
```

</td>
</tr>
<tr>
<td>

`duration-(<custom-property>)`

</td>
<td>

```css
--tw-duration: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`duration-[<value>]`

</td>
<td>

```css
--tw-duration: <value>;
```

</td>
</tr>
</tbody>
</table>

> [!NOTE]
> The `duration-*` utility is not defined in `tw-animate-css` and is included only for completeness. It uses the `--tw-duration` variable to apply the duration. Check out the [Tailwind CSS documentation][TailwindCSS_Duration] to see the actual implementation.

<!-- Links -->

[TailwindCSS_Duration]: https://tailwindcss.com/docs/transition-duration
