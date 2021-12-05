# Grid 二维布局

- 容器
- 项目
- 行和列
- 单元格：行列的交叉区域
- 网格线

## 容器属性

- display: `grid` | `inline-grid`
- grid-template-columns 和 grid-template-rows
  - grid-template-columns: 每一列的列宽: px | % | repeat(<列数>, <宽度单位>)
    - repeat
    - auto-fill: 单元格大小固定，容器大小不确定: repeat(auto-fill, <宽度单位>)，容器尽可能地容纳更多的列
    - fr 关键字：fraction 的缩写，列之间的宽度比例
    - minmax： `function(minValue, maxValue)`
    - auto: 浏览器自己决定宽度
    - 网格线名称：[c1] 100px [c2] 100px [c3] auto [c4]
    - 布局实列
  - grid-template-rows: 每一行的行高
- `grid-row-gap`属性, `grid-column-gap`属性和`grid-gap`属性
  - `grid-row-gap`: 行与行的间隔，行间距
  - `grid-column-gap`: 列与列的间隔，列间距
  - `grid-gap`: 属性是`grid-column-gap`和`grid-row-gap`的合并简写形式
- `grid-template-areas`属性
- `grid-auto-flow`属性
  ```css
  grid-auto-flow: row;
  grid-auto-flow: column;
  grid-auto-flow: dense;
  grid-auto-flow: row dense;
  grid-auto-flow: column dense;
  ```
- `justify-items` 属性，`align-items` 属性，`place-items` 属性
  - `justify-items`: 单元格内容的水平位置， `start | end | center | stretch`
  - `align-items`：单元格内容的垂直位置, `start | end | center | stretch`
- `justify-content` 属性，`align-content` 属性，`place-content `属性
  - `justify-content`属性是整个内容区域在容器里面的水平位置（左中右）:`start | end | center | stretch | space-around | space-between | space-evenly`
  - `align-content`属性是整个内容区域的垂直位置（上中下）:`start | end | center | stretch | space-around | space-between | space-evenly`
- `grid-auto-columns` 属性，`grid-auto-rows` 属性
- `grid-template` 属性，`grid` 属性

## 项目属性

- grid-column-start 属性，grid-column-end 属性，grid-row-start 属性，grid-row-end 属性
- grid-column 属性，grid-row 属性
- grid-area 属性
- justify-self 属性，align-self 属性，place-self 属性
## 定义一个网格
### 1.1 设置列与行
```css
grid-template-columns: xx
```
- 使用fr单位: 1fr 2fr
- 重复设置列/行： repeat(<times>, <dimension>)
- 自动填充: repeat(auto-fill, <dimension>)
- minmax函数: minmax(<min dimension>, <max dimension>)
### 1.2 网格间隙
```css
column-gap: xx;
row-gap: xx;
gap: xx;
```
## 放置元素
### 2.1 基于线的放置元素
我们的网格中有许多的分隔线，我们可以根据这些分割线来放置元素：
- `grid-column-start` 开始的列网格线
- `grid-column-end`结束的列网格线
- `grid-row-start`开始的行网格线
- `grid-row-end`结束的列网格线

我们还可以使用 `grid-column` 、`grid-row`同时指定开始和结束的线。需要注意的是，开始和结束的线的序号要用 `/` 分开。
> 使用负数`-n`来表示倒数第`n`条网格线
- 2.1.1 使用`span`: 指定元素占得**列数**/**行数**
- 2.1.2 使用`grid-area`: 一次性指定所有的行/列序号：`<grid-row-start>` / `<grid-column-start>` / `<grid-row-end>` / `<grid-column-end>`，也就是先指定开始坐标的行/列序号，再指定结束坐标的行/列序号。

## 2.2 使用`grid-tempate-areas`放置元素
`grid-template-areas`属性的使用规则如下：
> 通过命名的方式来放置元素是一种**非常直观的方式**，**非常强大**

- 需要填满网格的每个格子
- 对于某个横跨多个格子的元素，重复写上那个元素`grid-area`属性定义的区域名字
- 所有名字只能出现在一个连续的区域，不能在不同的位置出现
- 一个连续的区域必须是一个矩形
- 使用`.`符号，让一个格子留空
## 显示网格与隐式网格
显式网格是我们用`grid-template-columns`或 `grid-template-rows` 属性创建的，而**隐式网格**则是当「*网格项被放到已定义的网格外*」或「*网格项的数量多于网格的数量*」时才会自动生成。
### 3.1 给隐式网格设置大小
我们可以给网格容器设置 `grid-auto-rows` 和 `grid-auto-columns` 属性来指定隐式网格的大小
### 3.2 自动设置
当网格项的数量多于网格的数量时也会自动生成隐式网格，默认情况下元素会逐行放置，不够空间的话再生成新的行。我们可以通过 [`grid-auto-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) 属性来修改这个行为。
- `grid-auto-flow: row`: c在b的后面
- `grid-auto-flow: column`: c在b的下面
- `grid-auto-flow: dense`: c在a的后面

## 四、调整对齐方式
### 4.1 `justify-items`: 沿行轴对齐网络项
- `start`:
- `center`:
- `end`:
### `4.2 align-items`: 沿列轴对齐网格项
- `start`:
- `center`:
- `end`:
### `4.3 justify-content`
### `4.4 align-content`
如果网格容器的尺寸比整个网格内容的大，这时候就可以使用 `justify-content` 或 `align-content` 来调整网格内容的对齐了
- `start`
- `center`
- `end`
- `space-between`
- `space-around`
- `space-evenly`

## 其他
## Reference

- [complete-guide-grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [简明 CSS Grid 布局教程](https://mp.weixin.qq.com/s/AUIGC7C_TYhDNg_ADlZ7Pg)