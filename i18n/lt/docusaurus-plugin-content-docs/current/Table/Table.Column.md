---
title: Table.Column
---

# Table.Column


## Description

Pateikiamas nurodytas duomenų iš lentelės stulpelis kaip sąrašas.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Pateikiamas stulpelis <code>column</code> nurodytų duomenų iš lentelės <code>table</code> kaip sąrašas.


## Examples

### Example #1 
Pateikiamos reikšmės iš lentelės stulpelio [Name].
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
