# Shadow

## 为什么还要使用阴影？

阴影表示高程，而较大的阴影表示更高的高程。如果我们有策略地使用阴影，我们可以创造深度的错觉，就好像页面上的不同元素在不同级别上浮动在背景之上一样。

## 创建一致的环境

这是内聚阴影的第一个技巧：**页面上的每个阴影都应该共享相同的比率**。这将使每个元素看起来都来自同一光源。

### 总结：

页面上的每个元素都应由相同的全局光源照亮。
该属性使用水平和垂直偏移来表示光源的位置。为确保一致性，每个阴影应在这两个数字之间使用相同的比率。box-shadow
当元素靠近用户时，偏移量应增加，模糊半径应增加，阴影的不透明度应降低。
您可以使用我们的直觉跳过其中一些计算。

## 技巧

> Blender 光线追踪

### 多个边框阴影

### 颜色匹配的阴影

## Resources

- [Designing Beautiful Shadows in CSS](https://www.joshwcomeau.com/css/designing-shadows/#layering)
- [Make a smooth shadow, friend](https://shadows.brumm.af/)
- [css-for-js courses](https://css-for-js.dev/)
- [中文译文](https://juejin.cn/post/7034323356459466760)
