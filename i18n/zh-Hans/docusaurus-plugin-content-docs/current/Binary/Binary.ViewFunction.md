---
title: Binary.ViewFunction
---

# Binary.ViewFunction


创建可由在视图上(通过 Binary.View)定义的处理程序截获的函数。


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

基于可在由<code>Binary.View</code>创建的视图中处理的 <code>function</code> 创建视图函数。<br /><code>Binary.View</code> 的 <code>OnInvoke</code>处理程序可用于定义视图函数的处理程序。<br />与内置操作的处理程序一样，如果未指定<code>OnInvoke</code>处理程序，或者如果处理程序未处理视图函数，或者如果处理程序引发错误，则 <code>function</code> 会应用于视图顶部。<br />请参阅已发布的 Power Query 自定义连接器文档，从而了解有关 <code>Binary.View</code>和自定义视图函数的更完整的说明。<br />



## Category
Binary
