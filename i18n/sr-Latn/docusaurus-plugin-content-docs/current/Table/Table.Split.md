---
title: Table.Split
---

# Table.Split


## Description

Deli navedenu tabelu na listu tabela koristeći navedenu veličinu stranice.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Deli <code>table</code> na listu tabela gde je prvi element liste tabela koja sadrži prvih <code>pageSize</code> redova iz    izvorne tabele, sledeći element liste je tabela koja sadrži sledećih <code>pageSize</code> redova iz izvorne tabele, i tako dalje.


## Examples

### Example #1 
Podelite tabelu sa pet zapisa na tabele sa po dva zapisa.
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
