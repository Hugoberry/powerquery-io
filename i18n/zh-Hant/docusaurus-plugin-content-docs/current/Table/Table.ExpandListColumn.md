---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


指定資料表中的清單資料行之後，針對其清單中的每個值建立一個資料列複本。


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

指定 <code>table</code> 之後，其中 <code>column</code> 是值的清單，將清單分割成每個值各一個資料列。其他資料行中的值會複製到每個新建立的資料列中。


## Examples

### Example #1 
分割資料表中的 [Name] 清單資料行。
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
