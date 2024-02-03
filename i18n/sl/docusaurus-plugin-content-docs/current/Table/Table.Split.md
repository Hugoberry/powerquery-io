---
title: Table.Split
---

# Table.Split


## Description

Razdeli navedeno tabelo na seznam tabel z uporabo navedene velikosti strani.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Razdeli <code>table</code> na seznam tabel, kjer je prvi element seznama tabela, ki vsebuje prvih <code>pageSize</code> vrstic iz    izvorne tabele, naslednji element seznama pa je tabela, ki vsebuje naslednjih <code>pageSize</code> vrstic iz izvorne tabele itd.


## Examples

### Example #1 
Razdeli tabelo s petimi zapisi na tabele, v katerih sta v vsaki tabeli dva zapisa.
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
