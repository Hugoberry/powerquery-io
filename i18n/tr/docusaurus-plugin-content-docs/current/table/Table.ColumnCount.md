---
title: Table.ColumnCount
---

# Table.ColumnCount


Tablodaki sütun sayısını döndürür.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Remarks

<code>table</code> tablosundaki sütun sayısını döndürür.


## Examples

### Example #1 
Tablodaki sütun sayısını bulur.
```powerquery
Table.ColumnCount(
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
