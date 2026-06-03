---
title: Table.HasColumns
---

# Table.HasColumns


Gibt an, ob die Tabelle die angegebene(n) Spalte(n) enthält.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Gibt an, ob die `table` die angegebene(n) Spalte(n) `columns` enthält. Gibt `true` zurück, falls die Tabelle die Spalte(n) enthält. Andernfalls wird `false` zurückgegeben.


## Examples

### Example #1
Ermittelt, ob die Tabelle die Spalte "\[Name\]" enthält.
```powerquery
Table.HasColumns(
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
true
```


### Example #2
Ermittelt, ob die Tabelle die Spalten "\[Name\]" und "\[PhoneNumber\]" enthält.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
