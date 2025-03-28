# Animation Duration

## `duration-*`

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
animation-duration: <number>ms;
```

</td>
</tr>
<tr>
<td>

`duration-initial`

</td>
<td>

```css
animation-duration: initial;
```

</td>
</tr>
<tr>
<td>

`duration-(<custom-property>)`

</td>
<td>

```css
animation-duration: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`duration-[<value>]`

</td>
<td>

```css
animation-duration: <value>;
```

</td>
</tr>
</tbody>
</table>

> [!NOTE]
> This utility is not defined in `tw-animate-css` and is included only for completeness. It uses the `--tw-duration` variable to apply the duration. Check out the [Tailwind CSS documentation][TailwindCSS_Duration] to see the actual implementation.

<!-- Links -->

[TailwindCSS_Duration]: https://tailwindcss.com/docs/transition-duration
