---
title: Table.Column
---

# Table.Column


Vráti zadaný stĺpec údajov z tabuľky ako zoznam.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Vráti stĺpec údajov zadaný pomocou funkcie `column` z tabuľky `table` ako zoznam.


## Examples

### Example #1
Vráti hodnoty zo stĺpca \[Name\] v tabuľke .
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
