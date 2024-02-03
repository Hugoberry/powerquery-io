---
title: Table.RowCount
---

# Table.RowCount


## Description

Tablodaki satır sayısını döndürür.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

<code>table</code> içindeki satır sayısını döndürür.


## Examples

### Example #1 
Tablodaki satır sayısını bulur.
```powerquery
Table.RowCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
