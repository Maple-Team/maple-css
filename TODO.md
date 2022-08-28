- [ ] translation, transform 使用不清楚

- [title](https://www.smashingmagazine.com/2019/01/how-to-learn-css/)
- [In_Flow_and_Out_of_Flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

- [Learn layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [getting started with css layout](https://www.smashingmagazine.com/2018/05/guide-css-layout/)
- [Layout Land video series](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)

- [Everything You Need To Know About Alignment In Flexbox](https://www.smashingmagazine.com/2018/08/flexbox-alignment/)

- [How Big Is That Flexible Box?](https://www.smashingmagazine.com/2018/09/flexbox-sizing-flexible-box/)
- [Using Media Queries for Responsive Design in 2018](https://www.smashingmagazine.com/2018/02/media-queries-responsive-design-2018/)

## css property

### layout

- grid

### effect

- [巧用 CSS filter，让你的网站更加酷炫！](https://juejin.cn/post/7002829486806794276)

- [ ] css 效果目录

### 不熟悉的 CSS 样式

- mask
- `@property`: [实验性属性](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

  - The @property CSS at-rule is part of the CSS Houdini umbrella of APIs, it allows developers to explicitly define their css custom properties, allowing for property type checking, setting default values, and define whether a property can inherit values or not.

  - The @property rule represents a custom property registration directly in a stylesheet **without having to run any JS**. Valid @property rules result in a registered custom property, as if CSS.registerProperty had been called with equivalent parameters.

```css
@property --nose {
  syntax: "<percentage>";
  initial-value: 0%;
  inherits: false;
}
```
