# Opacity

While technically not a transform, opacity can be used to fade elements in and out.

> [!NOTE]
> You also need to apply [`animate-in`][Animate_in] or [`animate-out`][Animate_out] classes respectively.

## `fade-in-*`

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

`fade-in`

</td>
<td>

```css
--tw-enter-opacity: 0;
```

</td>
</tr>
<tr>
<td>

`fade-in-<number>`

</td>
<td>

```css
--tw-enter-opacity: calc(<number> / 100);
```

</td>
</tr>
<tr>
<td>

`fade-in-(<custom-property>)`

</td>
<td>

```css
--tw-enter-opacity: var(<custom-property>);
```

</td>
</tr>
</tr>
<tr>
<td>

`fade-in-[<value>]`

</td>
<td>

```css
--tw-enter-opacity: <value>;
```

</td>
</tr>
</tbody>
</table>

## `fade-out-*`

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

`fade-out`

</td>
<td>

```css
--tw-exit-opacity: 0;
```

</td>
</tr>
<tr>
<td>

`fade-out-<number>`

</td>
<td>

```css
--tw-exit-opacity: calc(<number> / 100);
```

</td>
</tr>
<tr>
<td>

`fade-out-(<custom-property>)`

</td>
<td>

```css
--tw-exit-opacity: var(<custom-property>);
```

</td>
</tr>
</tr>
<tr>
<td>

`fade-out-[<value>]`

</td>
<td>

```css
--tw-exit-opacity: <value>;
```

</td>
</tr>
</tbody>
</table>

<!-- Links -->

[Animate_in]: ../animations/in-out.md#animate-in
[Animate_out]: ../animations/in-out.md#animate-out
