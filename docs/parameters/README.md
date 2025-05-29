# Parameters

Parameter classes are used to modify the behavior of the animation classes. They are used to set the duration, delay, and other properties of the animation.

| Class                             | Description                                                                                                                                              |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`duration-*`][Docs_Duration]     | Sets [`animation-duration`][MDN_Duration]. Uses `--tw-duration`, see [Tailwind CSS docs][TailwindCSS_Duration].                                          |
| [`ease-*`][Docs_Ease]             | Sets [`animation-timing-function`][MDN_Ease]. Uses `--tw-ease`, see [Tailwind CSS docs][TailwindCSS_Easing].                                             |
| [`delay-*`][Docs_Delay]           | Sets [`animation-delay`][MDN_Delay]. Possible values: Any `<number>`, `initial` or any other `[<value>]`.                                                |
| [`repeat-*`][Docs_Repeat]         | Sets [`animation-iteration-count`][MDN_Repeat]. Possible values: Any `<number>`, `infinite`, `initial` or any other `[<value>]`.                         |
| [`direction-*`][Docs_Direction]   | Sets [`animation-direction`][MDN_Direction]. Possible values: `normal`, `reverse`, `alternate`, `alternate-reverse`, `initial` or any other `[<value>]`. |
| [`fill-mode-*`][Docs_Fill_Mode]   | Sets [`animation-fill-mode`][MDN_Fill_Mode]. Possible values: `none`, `forwards`, `backwards`, `both`, `initial` or any other `[<value>]`.               |
| [`running`][Docs_Running]         | Sets [`animation-play-state`][MDN_Play_State] to `running`.                                                                                              |
| [`paused`][Docs_Paused]           | Sets [`animation-play-state`][MDN_Play_State] to `paused`.                                                                                               |
| [`play-state-*`][Docs_Play_State] | Sets [`animation-play-state`][MDN_Play_State]. Possible values: `initial` or any other `[<value>]`.                                                      |

<!-- Links -->

[TailwindCSS_Duration]: https://tailwindcss.com/docs/transition-duration
[TailwindCSS_Easing]: https://tailwindcss.com/docs/transition-timing-function
[TailwindCSS_Delay]: https://tailwindcss.com/docs/transition-delay
[Docs_Duration]: ./animation-duration.md
[Docs_Ease]: ./animation-easing.md
[Docs_Delay]: ./animation-delay.md
[Docs_Repeat]: ./animation-iteration-count.md
[Docs_Direction]: ./animation-direction.md
[Docs_Fill_Mode]: ./animation-fill-mode.md
[Docs_Running]: ./animation-play-state.md#running
[Docs_Paused]: ./animation-play-state.md#paused
[Docs_Play_State]: ./animation-play-state.md#play-state-
[MDN_Duration]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
[MDN_Ease]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
[MDN_Delay]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
[MDN_Repeat]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
[MDN_Direction]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
[MDN_Fill_Mode]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
[MDN_Play_State]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
