# Position

## Sticky

The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor(最近的滚动祖先元素) and containing block (nearest block-level ancestor 最近的块级祖先), including table-related elements(包括表格相关的元素), based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements(偏移不影响其他的元素位置).

This value always creates a new [stacking context(栈上下文)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). Note that a sticky element "sticks" to its nearest ancestor that has a "scrolling mechanism" (created when overflow is hidden, scroll, auto, or overlay), even if that ancestor isn't the nearest actually scrolling ancestor.

### Browser compatibility

- chrome 56
- edge 16
- firefox 32
- IE not support
- Opera 43
- Safari 13

## Example

- dt 滚动组头吸附效果
- 顶部导航栏吸顶? TODO

## Resources

- [mdn position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [mdn The_stacking_context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [css-trick sticky](https://css-tricks.com/position-sticky-2/)
- [滚动导航+吸顶合并方案（含 sticky 详解）](https://juejin.cn/post/6844904085603221518)
