# Transforms

Transforms are used to modify how an element is rendered on the screen. They are used to set the position, size, and rotation of an element.

In the context of animations, transforms define the starting and ending styles of the animated element.

| Class                                                 | Description                                                                                                                          |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`fade-in`][Docs_Fade_In]                             | Fades the element in from `opacity: 0`.                                                                                              |
| [`fade-in-*`][Docs_Fade_In]                           | Fades the element in from the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.                |
| [`fade-out`][Docs_Fade_Out]                           | Fades the element out to `opacity: 0`.                                                                                               |
| [`fade-out-*`][Docs_Fade_Out]                         | Fades the element out to the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.                 |
| [`zoom-in`][Docs_Zoom_In]                             | Zooms the element in from `scale3D(0,0,0)`.                                                                                          |
| [`zoom-in-*`][Docs_Zoom_In]                           | Zooms the element in from the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.                |
| [`zoom-out`][Docs_Zoom_Out]                           | Zooms the element out to `scale3D(0,0,0)`.                                                                                           |
| [`zoom-out-*`][Docs_Zoom_Out]                         | Zooms the element out to the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.                 |
| [`spin-in`][Docs_Spin_In]                             | Spins the element in from `rotate(30deg)`.                                                                                           |
| [`spin-in-*`][Docs_Spin_In]                           | Spins the element in from the specified value. Possible values: Any `<number>` (degrees) or any other `[<value>]`.                   |
| [`spin-out`][Docs_Spin_Out]                           | Spins the element out to `rotate(30deg)`.                                                                                            |
| [`spin-out-*`][Docs_Spin_Out]                         | Spins the element out to the specified value. Possible values: Any `<number>` (degrees) or any other `[<value>]`.                    |
| [`slide-in-from-top`][Docs_Slide_In_From_Top]         | Slides the element in from the top (`100%`).                                                                                         |
| [`slide-in-from-top-*`][Docs_Slide_In_From_Top]       | Slides the element in from the top by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.    |
| [`slide-in-from-bottom`][Docs_Slide_In_From_Bottom]   | Slides the element in from the bottom (`100%`).                                                                                      |
| [`slide-in-from-bottom-*`][Docs_Slide_In_From_Bottom] | Slides the element in from the bottom by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`. |
| [`slide-in-from-left`][Docs_Slide_In_From_Left]       | Slides the element in from the left (`100%`).                                                                                        |
| [`slide-in-from-left-*`][Docs_Slide_In_From_Left]     | Slides the element in from the left by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.   |
| [`slide-in-from-right`][Docs_Slide_In_From_Right]     | Slides the element in from the right (`100%`).                                                                                       |
| [`slide-in-from-right-*`][Docs_Slide_In_From_Right]   | Slides the element in from the right by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.  |
| [`slide-out-to-top`][Docs_Slide_Out_To_Top]           | Slides the element out to the top (`100%`).                                                                                          |
| [`slide-out-to-top-*`][Docs_Slide_Out_To_Top]         | Slides the element out to the top by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.     |
| [`slide-out-to-bottom`][Docs_Slide_Out_To_Bottom]     | Slides the element out to the bottom (`100%`).                                                                                       |
| [`slide-out-to-bottom-*`][Docs_Slide_Out_To_Bottom]   | Slides the element out to the bottom by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.  |
| [`slide-out-to-left`][Docs_Slide_Out_To_Left]         | Slides the element out to the left (`100%`).                                                                                         |
| [`slide-out-to-left-*`][Docs_Slide_Out_To_Left]       | Slides the element out to the left by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.    |
| [`slide-out-to-right`][Docs_Slide_Out_To_Right]       | Slides the element out to the right (`100%`).                                                                                        |
| [`slide-out-to-right-*`][Docs_Slide_Out_To_Right]     | Slides the element out to the right by the specified value. Possible values: Any `<number>` (percentage) or any other `[<value>]`.   |

<!-- Links -->

[Docs_Fade_In]: ./opacity.md#fade-in-
[Docs_Fade_Out]: ./opacity.md#fade-out-
[Docs_Zoom_In]: ./scale.md#zoom-in-
[Docs_Zoom_Out]: ./scale.md#zoom-out-
[Docs_Spin_In]: ./rotate.md#spin-in-
[Docs_Spin_Out]: ./rotate.md#spin-out-
[Docs_Slide_In_From_Left]: ./translate.md#slide-in-from-left-
[Docs_Slide_In_From_Right]: ./translate.md#slide-in-from-right-
[Docs_Slide_Out_To_Top]: ./translate.md#slide-out-to-top-
[Docs_Slide_Out_To_Bottom]: ./translate.md#slide-out-to-bottom-
[Docs_Slide_Out_To_Left]: ./translate.md#slide-out-to-left-
[Docs_Slide_Out_To_Right]: ./translate.md#slide-out-to-right-
