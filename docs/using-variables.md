# Using-variables

## 解决了什么样的问题

> - `CSS`代码复用
> - 方便`CSS`样式维护

Large documents or applications (and even small ones) can contain quite a bit of CSS. Many of the values in the CSS file will be **duplicate data(数据重复)**; for example, a site may establish a color scheme and reuse three or four colors throughout the site. Altering this data can be difficult and error-prone, since it’s scattered throughout the CSS file (and possibly across multiple files), and may not be amenable to Find-and-Replace.

This module introduces a family of custom author-defined properties known collectively as custom properties, which allow an author to assign arbitrary values to a property with an author-chosen name, and the [`var()`](https://www.w3.org/TR/css-variables-1/#funcdef-var) function, which allow an author to then use those values in other properties elsewhere in the document. This makes it easier to read large files, as seemingly-arbitrary values now have informative names, and makes editing such files much easier and less error-prone, as one only has to change the value once, in the custom property, and the change will propagate to all uses of that variable automatically.

## 如何使用

```css
// 定义
// 1.根元素
:root {
  --a-color: red;
}
// 2. 父级元素上
.p {
  --a-color2: blue;
}
// 使用
.c {
  color: var(--a-color2);
}
```

## 最佳实践

## Resources

- [w3g spec](https://www.w3.org/TR/css-variables-1/#using-variables)
