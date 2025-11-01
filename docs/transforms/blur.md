# Blur

While technically not a transform, blur can be used to unblur elements when they appear or blur them when they disappear.

> [!NOTE]
> You also need to apply [`animate-in`][Animate_in] or [`animate-out`][Animate_out] classes respectively.

## `blur-in-*`

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

`blur-in`

</td>
<td>

```css
--tw-enter-blur: 20px;
```

</td>
</tr>
<tr>
<td>

`blur-in-<number>`

</td>
<td>

```css
--tw-enter-blur: calc(<number> * 1px);
```

</td>
</tr>
<tr>
<td>

`blur-in-(<custom-property>)`

</td>
<td>

```css
--tw-enter-blur: var(<custom-property>);
```

</td>
</tr>
</tr>
<tr>
<td>

`blur-in-[<value>]`

</td>
<td>

```css
--tw-enter-blur: <value>;
```

</td>
</tr>
</tbody>
</table>

## `blur-out-*`

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

`blur-out`

</td>
<td>

```css
--tw-exit-blur: 20px;
```

</td>
</tr>
<tr>
<td>

`blur-out-<number>`

</td>
<td>

```css
--tw-exit-blur: calc(<number> * 1px);
```

</td>
</tr>
<tr>
<td>

`blur-out-(<custom-property>)`

</td>
<td>

```css
--tw-exit-blur: var(<custom-property>);
```

</td>
</tr>
</tr>
<tr>
<td>

`blur-out-[<value>]`

</td>
<td>

```css
--tw-exit-blur: <value>;
```

</td>
</tr>
</tbody>
</table>

<!-- Links -->

[Animate_in]: ../animations/in-out.md#animate-in
[Animate_out]: ../animations/in-out.md#animate-out
