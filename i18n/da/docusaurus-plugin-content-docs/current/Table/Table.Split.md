---
title: Table.Split
---

# Table.Split


Opdeler den angivne tabel til en liste med tabeller ved hjælp af den angivne sidestørrelse.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

Opdeler <code>table</code> til en liste med tabeller, hvor det første element på listen er en tabel, der indeholder de første <code>pageSize</code> rækker fra    kildetabellen. Det næste element på listen er en tabel, der indeholder de næste <code>pageSize</code> rækker fra kildetabellen osv.


## Examples

### Example #1 
Opdel en tabel med fem poster til tabeller med to poster hver.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
