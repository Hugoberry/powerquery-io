---
title: Table.ViewError
---

# Table.ViewError


创建修改后的错误记录，该记录在视图上定义的处理程序引发时(通过 Table.View)将不会触发回退。


## Syntax

```powerquery
Table.ViewError(
    errorRecord as record
) as record
```


## Remarks

根据 <code>errorRecord</code> 创建修改后的错误记录，该记录在视图上定义的处理程序引发时(通过 Table.View)将不会触发回退。



## Category
Table.Table construction
