---
title: lazyLoading 
---

# 懒加载组件

效果展示     



<ClientOnly>
<lazyLoading-demos></lazyLoading-demos>
</ClientOnly>



### 代码思路

- 使用了IntersectionObserver API来实现懒加载



### 使用说明

- 也可以用来懒加载组件。对于数量较多的图片，或者组件内部消耗比较大
  都可以用。

### API


| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| timeout  | 等待时间 | Number     | - |


