---
title: Table.ColumnNames
---

# Table.ColumnNames


Zwraca nazwy kolumn w postaci listy.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Zwraca nazwy kolumn w tabeli <code>table</code> jako listę wartości tekstowych.


## Examples

### Example #1 
Znajdź nazwy kolumn w tabeli.
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
