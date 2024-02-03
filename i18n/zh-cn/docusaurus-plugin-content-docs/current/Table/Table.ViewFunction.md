---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

创建一个可以由在视图上(通过 Table.View)定义的处理程序截获的函数。


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

创建一个基于可以在由 <code>Table.View</code> 创建的视图中处理的 <code>function</code> 的视图函数。<br /><code>Table.View</code> 的 <code>OnInvoke</code> 处理程序可用于定义视图函数的处理程序。<br />与内置操作的处理程序一样，如果未指定 <code>OnInvoke</code> 处理程序，或如果处理程序未处理视图函数，或如果处理程序引发错误，则将 <code>function</code> 应用于视图顶部。<br />有关 <code>Table.View</code> 和自定义视图函数的更完整的说明，请参阅已发布的 Power Query 自定义连接器文档。<br />



## Category
Table.Table construction
