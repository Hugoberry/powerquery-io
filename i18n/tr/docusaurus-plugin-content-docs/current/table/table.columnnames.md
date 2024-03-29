---
title: Table.ColumnNames
---

# Table.ColumnNames


Sütun adlarını liste olarak döndürür.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

<code>table</code> tablosundaki sütun adlarını metin listesi olarak döndürür.


## Examples

### Example #1 
Tablodaki sütun adlarını bulur.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
