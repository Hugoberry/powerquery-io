---
title: Table.Split
---

# Table.Split


## Description

Nurodyta lentelė išskaidoma į lentelių sąrašą naudojant nurodytą puslapio dydį.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

<code>table</code> išskaidomas į lentelių sąrašą, kuriame pirmasis sąrašo elementas yra lentelė su pirmosiomis <code>pageSize</code> eil. iš    šaltinio lentelės, antrasis sąrašo elementas yra lentelė su kitomis <code>pageSize</code> eil. iš šaltinio sąrašo ir t. t.


## Examples

### Example #1 
Penkių įrašų lentelė suskaidoma į lenteles, kuriose yra po du įrašus.
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
