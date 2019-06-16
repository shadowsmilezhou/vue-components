---
title: pager
---

# 分页器

效果展示     

<ClientOnly>
<pager-demos></pager-demos>
</ClientOnly>


### 代码思路

- 当前页和总页数改变时，出发computed属性进行重新渲染

  
### 使用说明

- 除了第一页和最后一页，中间最多显示5页，若相邻页面之间页数大于1或者小于1
  则用。。。代替.

### API

| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| total-page  | 总页数 | Number     | - |
| current-page | 当前第几页  | Number      | 1   |
--------------------- 




