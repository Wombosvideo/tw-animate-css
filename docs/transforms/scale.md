# Scale

Scale transforms can be used to zoom elements in and out.

> [!NOTE]
> You also need to apply [`animate-in`][Animate_in] or [`animate-out`][Animate_out] classes respectively.

## `zoom-in-*`

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

`zoom-in`

</td>
<td>

```css
--tw-enter-scale: 0;
```

</td>
</tr>
<tr>
<td>

`zoom-in-<number>`

</td>
<td>

```css
--tw-enter-scale: <number>%;
```

</td>
</tr>
<tr>
<td>

`zoom-in-(<custom-property>)`

</td>
<td>

```css
--tw-enter-scale: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`zoom-in-[<value>]`

</td>
<td>

```css
--tw-enter-scale: <value>;
```

</td>
</tr>
</tbody>
</table>

## `zoom-out-*`

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

`zoom-out`

</td>
<td>

```css
--tw-exit-scale: 0;
```

</td>
</tr>
<tr>
<td>

`zoom-out-<number>`

</td>
<td>

```css
--tw-exit-scale: <number>%;
```

</td>
</tr>
<tr>
<td>

`zoom-out-(<custom-property>)`

</td>
<td>

```css
--tw-exit-scale: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`zoom-out-[<value>]`

</td>
<td>

```css
--tw-exit-scale: <value>;
```

</td>
</tr>
</tbody>
</table>

<!-- Links -->

[Animate_in]: ../animations/in-out.md#animate-in
[Animate_out]: ../animations/in-out.md#animate-out
