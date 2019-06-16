---
title: table
---

# 表格

效果展示     

<ClientOnly>
<table-demos></table-demos>
</ClientOnly>




### 代码思路

- 固定表头思路：拷贝一个table的head，然后盖在原始表头上面
- 表宽最好一致，否则上线的边框线会无法对齐
  



### API

| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| height  | 表格高度 | Number     | - |
| expendField  | 扩展文字 | String     | - |
| orderBy  | 排序 | Object     | - |
| loading  | 状态 | Boolean     | - |
| striped  | 黑白相间的线 | Boolean     | true |
| selectedItems  | 选择器 | Array     | - |
| columns | 总行数（必传） | Array     | - |
| dataSource | 表格源数据 | Number     | - |
| numberVisible | 是否可以看到排列数字 | Boolean     | false |
| bordered | 是否看到边框 | Boolean     | false |
| checkable | 是否有可选择框 | Boolean     | false |



