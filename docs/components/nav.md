---
title: nav
---

# 导航菜单

效果展示     

<ClientOnly>
<nav-demos></nav-demos>
</ClientOnly>


### 代码思路

- 使用了provide注入了g-nav组件root和this，使得所有组件都可以访问到。这样
  可以简化传递的参数数量
  
### 使用说明

- g-nav-item 和g-sub-nav 只能放在g-nav中
- g-sub-nav是在有三级菜单甚至更多的时候用.

### API

| 参数  | 说明 | 类型    | 默认值  |
|-------|:---:|-----------|-------:|
| selected  | 默认选中 | string     | - |
| vertical | 是否竖向展示  | Boolean      | false   |
| name  | 导航名称（必须填）   | string |   -  |
--------------------- 




