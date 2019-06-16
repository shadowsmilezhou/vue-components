---
title: cascader
---

# 级联选择

效果展示     

<ClientOnly>
<cascader-demos></cascader-demos>
</ClientOnly>




### 代码思路

-  对相同格式的数据使用递归的方式
-  需要将数据转换成能递归的格式，然后在组件中进行渲染



### 使用说明

- 后台需要告诉我数据还有没有子节点。




### API

| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| source  | 原始数据 | Array     | [] |
| selected | 选中项  | Array     | []  |
| load-data | 从后台加载数据的方法  |  Function    |  -  |



### 数据格式特殊说明(部分)

```$xslt
source：
    [
        {"id":1,"name":"北京","parent_id":0,"k1":"b","k2":"bj","k3":"beijing","k4":"","k5":"市","k6":110000,"k7":"010"},
        {"id":2,"name":"天津","parent_id":0,"k1":"t","k2":"tj","k3":"tianjin","k4":"","k5":"市","k6":120000,"k7":"022"},
        {"id":3,"name":"上海","parent_id":0,"k1":"s","k2":"sh","k3":"shanghai","k4":"","k5":"市","k6":310000,"k7":"021"},
        {"id":4,"name":"重庆","parent_id":0,"k1":"c","k2":"cq","k3":"chongqing","k4":"","k5":"市","k6":500000,"k7":"023"},
        {"id":5,"name":"河北","parent_id":0,"k1":"h","k2":"hb","k3":"hebei","k4":"","k5":"省","k6":130000,"k7":""}
    ]
 
```