# Translate

Translate transforms can be used to slide elements in and out from different directions.

> [!NOTE]
> You also need to apply [`animate-in`][Animate_in] or [`animate-out`][Animate_out] classes respectively.

## `slide-in-from-top-*`

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

`slide-in-from-top`

</td>
<td>

```css
--tw-enter-translate-y: -100%;
```

</td>
</tr>
<tr>
<td>

`slide-in-from-top-<number>`

</td>
<td>

```css
--tw-enter-translate-y: calc(<number> * var(--spacing) * -1);
```

</td>
</tr>
<tr>
<td>

`slide-in-from-top-(<custom-property>)`

</td>
<td>

```css
--tw-enter-translate-y: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-in-from-top-[<value>]`

</td>
<td>

```css
--tw-enter-translate-y: calc(<value> * -1);
```

</td>
</tr>
</tbody>
</table>

## `slide-in-from-bottom-*`

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

`slide-in-from-bottom`

</td>
<td>

```css
--tw-enter-translate-y: 100%;
```

</td>
</tr>
<tr>
<td>

`slide-in-from-bottom-<number>`

</td>
<td>

```css
--tw-enter-translate-y: calc(<number> * var(--spacing));
```

</td>
</tr>
<tr>
<td>

`slide-in-from-bottom-(<custom-property>)`

</td>
<td>

```css
--tw-enter-translate-y: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-in-from-bottom-[<value>]`

</td>
<td>

```css
--tw-enter-translate-y: <value>;
```

</td>
</tr>
</tbody>
</table>

## `slide-in-from-left-*`

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

`slide-in-from-left`

</td>
<td>

```css
--tw-enter-translate-x: -100%;
```

</td>
</tr>
<tr>
<td>

`slide-in-from-left-<number>`

</td>
<td>

```css
--tw-enter-translate-x: calc(<number> * var(--spacing) * -1);
```

</td>
</tr>
<tr>
<td>

`slide-in-from-left-(<custom-property>)`

</td>
<td>

```css
--tw-enter-translate-x: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-in-from-left-[<value>]`

</td>
<td>

```css
--tw-enter-translate-x: calc(<value> * -1);
```

</td>
</tr>
</tbody>
</table>

## `slide-in-from-right-*`

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

`slide-in-from-right`

</td>
<td>

```css
--tw-enter-translate-x: 100%;
```

</td>
</tr>
<tr>
<td>

`slide-in-from-right-<number>`

</td>
<td>

```css
--tw-enter-translate-x: calc(<number> * var(--spacing));
```

</td>
</tr>
<tr>
<td>

`slide-in-from-right-(<custom-property>)`

</td>
<td>

```css
--tw-enter-translate-x: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-in-from-right-[<value>]`

</td>
<td>

```css
--tw-enter-translate-x: <value>;
```

</td>
</tr>
</tbody>
</table>

## `slide-in-from-start-*`

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

`slide-in-from-start`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: -100%;
}
&:dir(rtl) {
  --tw-enter-translate-x: 100%;
}
```

</td>
</tr>
<tr>
<td>

`slide-in-from-start-<number>`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: calc(<number> * var(--spacing) * -1);
}
&:dir(rtl) {
  --tw-enter-translate-x: calc(<number> * var(--spacing));
}
```

</td>
</tr>
<tr>
<td>

`slide-in-from-start-(<custom-property>)`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: calc(var(<custom-property>) * -1);
}
&:dir(rtl) {
  --tw-enter-translate-x: var(<custom-property>);
}
```

</td>
</tr>
<tr>
<td>

`slide-in-from-start-[<value>]`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: calc(<value> * -1);
}
&:dir(rtl) {
  --tw-enter-translate-x: calc(<value>);
}
```

</td>
</tr>
</tbody>
</table>

## `slide-in-from-end-*`

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

`slide-in-from-end`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: 100%;
}
&:dir(rtl) {
  --tw-enter-translate-x: -100%;
}
```

</td>
</tr>
<tr>
<td>

`slide-in-from-end-<number>`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: calc(<number> * var(--spacing));
}
&:dir(rtl) {
  --tw-enter-translate-x: calc(<number> * var(--spacing) * -1);
}
```

</td>
</tr>
<tr>
<td>

`slide-in-from-end-(<custom-property>)`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: var(<custom-property>);
}
&:dir(rtl) {
  --tw-enter-translate-x: calc(var(<custom-property>) * -1);
}
```

</td>
</tr>
<tr>
<td>

`slide-in-from-end-[<value>]`

</td>
<td>

```css
&:dir(ltr) {
  --tw-enter-translate-x: calc(<value>);
}
&:dir(rtl) {
  --tw-enter-translate-x: calc(<value> * -1);
}
```

</td>
</tr>
</tbody>
</table>

## `slide-out-to-top-*`

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

`slide-out-to-top`

</td>
<td>

```css
--tw-exit-translate-y: -100%;
```

</td>
</tr>
<tr>
<td>

`slide-out-to-top-<number>`

</td>
<td>

```css
--tw-exit-translate-y: calc(<number> * var(--spacing) * -1);
```

</td>
</tr>
<tr>
<td>

`slide-out-to-top-(<custom-property>)`

</td>
<td>

```css
--tw-exit-translate-y: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-out-to-top-[<value>]`

</td>
<td>

```css
--tw-exit-translate-y: calc(<value> * -1);
```

</td>
</tr>
</tbody>
</table>

## `slide-out-to-bottom-*`

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

`slide-out-to-bottom`

</td>
<td>

```css
--tw-exit-translate-y: 100%;
```

</td>
</tr>
<tr>
<td>

`slide-out-to-bottom-<number>`

</td>
<td>

```css
--tw-exit-translate-y: calc(<number> * var(--spacing));
```

</td>
</tr>
<tr>
<td>

`slide-out-to-bottom-(<custom-property>)`

</td>
<td>

```css
--tw-exit-translate-y: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-out-to-bottom-[<value>]`

</td>
<td>

```css
--tw-exit-translate-y: <value>;
```

</td>
</tr>
</tbody>
</table>

## `slide-out-to-left-*`

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

`slide-out-to-left`

</td>
<td>

```css
--tw-exit-translate-x: -100%;
```

</td>
</tr>
<tr>
<td>

`slide-out-to-left-<number>`

</td>
<td>

```css
--tw-exit-translate-x: calc(<number> * var(--spacing) * -1);
```

</td>
</tr>
<tr>
<td>

`slide-out-to-left-(<custom-property>)`

</td>
<td>

```css
--tw-exit-translate-x: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-out-to-left-[<value>]`

</td>
<td>

```css
--tw-exit-translate-x: calc(<value> * -1);
```

</td>
</tr>
</tbody>
</table>

## `slide-out-to-right-*`

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

`slide-out-to-right`

</td>
<td>

```css
--tw-exit-translate-x: 100%;
```

</td>
</tr>
<tr>
<td>

`slide-out-to-right-<number>`

</td>
<td>

```css
--tw-exit-translate-x: calc(<number> * var(--spacing));
```

</td>
</tr>
<tr>
<td>

`slide-out-to-right-(<custom-property>)`

</td>
<td>

```css
--tw-exit-translate-x: var(<custom-property>);
```

</td>
</tr>
<tr>
<td>

`slide-out-to-right-[<value>]`

</td>
<td>

```css
--tw-exit-translate-x: <value>;
```

</td>
</tr>
</tbody>
</table>

## `slide-out-to-start-*`

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

`slide-out-to-start`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: -100%;
}
&:dir(rtl) {
  --tw-exit-translate-x: 100%;
}
```

</td>
</tr>
<tr>
<td>

`slide-out-to-start-<number>`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: calc(<number> * var(--spacing) * -1);
}
&:dir(rtl) {
  --tw-exit-translate-x: calc(<number> * var(--spacing));
}
```

</td>
</tr>
<tr>
<td>

`slide-out-to-start-(<custom-property>)`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: calc(var(<custom-property>) * -1);
}
&:dir(rtl) {
  --tw-exit-translate-x: var(<custom-property>);
}
```

</td>
</tr>
<tr>
<td>

`slide-out-to-start-[<value>]`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: calc(<value> * -1);
}
&:dir(rtl) {
  --tw-exit-translate-x: calc(<value>);
}
```

</td>
</tr>
</tbody>
</table>

## `slide-out-to-end-*`

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

`slide-out-to-end`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: 100%;
}
&:dir(rtl) {
  --tw-exit-translate-x: -100%;
}
```

</td>
</tr>
<tr>
<td>

`slide-out-to-end-<number>`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: calc(<number> * var(--spacing));
}
&:dir(rtl) {
  --tw-exit-translate-x: calc(<number> * var(--spacing) * -1);
}
```

</td>
</tr>
<tr>
<td>

`slide-out-to-end-(<custom-property>)`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: var(<custom-property>);
}
&:dir(rtl) {
  --tw-exit-translate-x: calc(var(<custom-property>) * -1);
}
```

</td>
</tr>
<tr>
<td>

`slide-out-to-end-[<value>]`

</td>
<td>

```css
&:dir(ltr) {
  --tw-exit-translate-x: calc(<value>);
}
&:dir(rtl) {
  --tw-exit-translate-x: calc(<value> * -1);
}
```

</td>
</tr>
</tbody>
</table>

<!-- Links -->

[Animate_in]: ../animations/in-out.md#animate-in
[Animate_out]: ../animations/in-out.md#animate-out
