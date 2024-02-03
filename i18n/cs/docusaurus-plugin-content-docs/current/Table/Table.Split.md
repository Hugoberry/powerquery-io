---
title: Table.Split
---

# Table.Split


## Description

Rozdělí zadanou tabulku do seznamu tabulek s použitím zadané velikosti stránky.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Rozdělí <code>table</code> do seznamu tabulek, kde první prvek seznamu je tabulka s prvními <code>pageSize</code> řádky ze zdrojové tabulky,    další prvek seznamu je tabulka s dalšími <code>pageSize</code> prvky ze zdrojové tabulky atd.


## Examples

### Example #1 
Rozdělení tabulky s pěti záznamy do tabulek po dvou záznamech.
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
