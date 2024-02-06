---
title: Table.ToColumns
---

# Table.ToColumns


根據資料表建立資料行值巢狀清單的清單。


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

根據資料表 <code>table</code> 建立巢狀清單的清單。每個清單項目都是包含資料行值的內部清單。


## Examples

### Example #1 
根據資料表建立資料行值的清單。
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
