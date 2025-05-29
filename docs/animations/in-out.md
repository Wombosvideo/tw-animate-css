# Enter/Exit Animations

The following are base classes for enter and exit animations. You can use [parameters](../parameters/README.md) to customize things like duration, easing, and delay, or you can use [transformations](../transform/README.md) to specify the animations themselves.

## `animate-in`

Base class for enter animations. This needs to be applied in order for enter animations to work.

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

`animate-in`

</td>
<td>

```css
animation: enter var(--tw-duration, 150ms) var(--tw-ease, ease);

@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0)
      scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1))
      rotate(var(--tw-enter-rotate, 0));
  }
}
```

</td>
</tr>
</tbody>
</table>

## `animate-out`

Base class for exit animations. This needs to be applied in order for exit animations to work.

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

`animate-out`

</td>
<td>

```css
animation: exit var(--tw-duration, 150ms) var(--tw-ease, ease);

@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0)
      scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1))
      rotate(var(--tw-exit-rotate, 0));
  }
}
```

</td>
</tr>

</tbody>
</table>
