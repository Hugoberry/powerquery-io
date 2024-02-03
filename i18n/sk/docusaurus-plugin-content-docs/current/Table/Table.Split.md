---
title: Table.Split
---

# Table.Split


## Description

Rozdelí zadanú tabuľku na zoznam tabuliek použitím zadanej veľkosti stránky.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Rozdelí <code>table</code> na zoznam tabuliek, kde prvým prvkom zoznamu je tabuľka obsahujúca prvé riadky (<code>pageSize</code>) zo    zdrojovej tabuľky. Ďalším prvkom v zozname je tabuľka obsahujúca ďalšie riadky (<code>pageSize</code>) zo zdrojovej tabuľky atď.


## Examples

### Example #1 
Rozdelí tabuľku s piatimi záznamami na tabuľky s dvomi záznamami.
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
