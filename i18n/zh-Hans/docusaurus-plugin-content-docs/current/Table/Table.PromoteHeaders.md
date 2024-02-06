---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


将第一行值升级为新的列标题(即列名)。


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

将第一行值升级为新的列标题(即列名)。默认情况下，仅将文本或数值升级为标题。有效选项:    <div>      <code>PromoteAllScalars</code> : 如果设置为 <code>true</code>，则使用 <code>Culture</code> (如果已指定，或当前文档区域设置)将第一行中的所有标量值升级为标题。    对于无法转换为文本的值，将使用默认列名。    </div>    <div>    <code>Culture</code> : 区域性名称，指定数据的区域性。    </div>


## Examples

### Example #1 
升级表中的第一行值。
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
将表的第一行中的所有标量升级为标题。
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
