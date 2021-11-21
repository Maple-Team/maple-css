> 记录一些不熟悉的属性

## -webkit-background-clip
设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。
```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text; // 背景被裁剪成文字的前景色 ->文字色透明，背景渐变效果

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: unset;

```
## -webkit-text-fill-color
> This feature is non-standard
The `-webkit-text-fill-color` CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.