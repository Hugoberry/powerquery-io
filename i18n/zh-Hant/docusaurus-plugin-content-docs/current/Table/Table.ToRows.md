---
title: Table.ToRows
---

# Table.ToRows


## Description

根據資料表建立資料列值巢狀清單的清單。


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

根據資料表 <code>table</code> 建立巢狀清單的清單。每個清單項目都是包含資料列值的內部清單。


## Examples

### Example #1 
根據資料表建立資料列值的清單。
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
