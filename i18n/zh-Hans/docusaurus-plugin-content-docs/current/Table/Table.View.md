---
title: Table.View
---

# Table.View


使用用户定义的处理程序创建或扩展表，以执行查询和操作。


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

返回 <code>table</code> 的视图，其中，如果将操作应用到视图，则使用 <code>handlers</code> 中指定的函数替代操作的默认行为。<br />如果提供 <code>table</code>，则所有处理程序函数均为可选项。如果不提供 <code>table</code>，则 <code>GetType</code> 和 <code>GetRows</code> 处理程序函数为必填。如果没有为操作指定处理程序函数，则将操作的默认行为应用到 <code>table</code> (<code>GetExpression</code> 除外)。<br />处理程序函数返回的值必须在语义上等同于针对 <code>table</code> 应用操作的结果(如果是 <code>GetExpression</code>，则为结果视图)。<br />如果处理程序函数引发一个错误，则将操作的默认行为应用到视图。<br /><code>Table.View</code> 可用于实现数据源的折叠 - 将 M 查询转换为特定于源的查询(例如，从 M 查询创建 T-SQL 语句)。<br />有关 <code>Table.View</code> 的更多完整说明，请查看已发布的 Power Query 自定义连接器文档。<br />


## Examples

### Example #1 
创建一个基本视图，该视图不需要访问行便可以确定类型或行计数。
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
