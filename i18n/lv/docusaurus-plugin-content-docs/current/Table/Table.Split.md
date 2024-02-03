---
title: Table.Split
---

# Table.Split


## Description

Sadala norādīto tabulu tabulu sarakstā, izmantojot norādītos lapas izmērus.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Sadala <code>table</code> tabulu sarakstā, kur pirmais saraksta elements ir tabula, kas satur pirmās <code>pageSize</code> rindas no    avota tabulas, nākamais saraksta elements ir tabula, kas satur nākamās <code>pageSize</code> rindas no avota tabulas utt.


## Examples

### Example #1 
Sadala tabulu ar pieciem ierakstiem tabulās ar diviem ierakstiem katrā.
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
