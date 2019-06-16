---
title: upload
---

# 图片上传

效果展示     

<ClientOnly>
<uploade-demos></uploade-demos>
</ClientOnly>




### 代码思路

-  主要是批量上传的时候，会分成一次一次的上传。
-  构造一个input，然后点击按钮的时候触发文件上传。
-  上传时，构造formData上传

### 使用说明
- 需要配合服务端上传。

### API

| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| accept  | 可上传的文件类型 | Number     | - |
| method  | 距离顶部距离 | Number     | - |
| action  | 服务器url | Number     | - |
| name  | 文件名字 | Number     | - |
| parseResponse  | 解析返回数据 | Function     | - |
| file-list  | 文件列表 | Number     | - |
| size-limit  | 限制文件上传大小 | Number     | - |



