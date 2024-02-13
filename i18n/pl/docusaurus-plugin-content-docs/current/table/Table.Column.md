---
title: Table.Column
---

# Table.Column


Zwraca określoną kolumnę danych z tabeli jako listę.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Zwraca w postaci listy kolumnę danych (określoną przez parametr <code>column</code>) z tabeli <code>table</code>.


## Examples

### Example #1 
Zwraca dane z kolumny [Name] tabeli.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
