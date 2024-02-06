---
title: Record.FromTable
---

# Record.FromTable


从 \{[Name = name, Value = value]} 格式的表创建记录。


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

从包含字段名称和值名称 <code>\{[Name = name, Value = value]}</code> 的记录 <code>table</code> 的表返回记录。如果字段名称不是唯一的，将引发异常。


## Examples

### Example #1 
从 Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]})格式的表创建记录。
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
