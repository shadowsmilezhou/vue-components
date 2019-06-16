---
title: button
---

# 按钮

效果展示     



<ClientOnly>
<button-demos></button-demos>
</ClientOnly>



### 代码思路

- 按钮组件是较为基础的一个组件,稍微值得注意的是，在切换方位的时候，使用了flex中
  的order属性来调整icon的顺序。

### 使用说明

- 按钮：默认按钮不带图标，若要加上图标，则需要设置icon属性。
- 图标方向：默认为左边，目前只支持，左右两个方向
- loading表示加载中的状态.

### API

| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| icon  | 图标选择 | string     | - |
| icon-position | 位置  | string      | left   |
| loading  | 加载状态    | boolean |   false  |
| disabled  | 禁用    |  boolean|   false   |
--------------------- 

