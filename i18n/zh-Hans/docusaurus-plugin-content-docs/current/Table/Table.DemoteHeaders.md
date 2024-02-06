---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


将列标题降级到第一行值。


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

将列标题(也即列名)降级到第一行值。默认列名为 "Column1"、"Column2" 等。


## Examples

### Example #1 
降级表中的第一行值。
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
