---
title: Table.Split
---

# Table.Split


## Description

Táblákból álló listára osztja fel a megadott listát a megadott oldalméret használatával.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Táblákból álló listára osztja fel a(z) <code>table</code> elemet, ahol a lista első eleme egy, a forrástábla első <code>pageSize</code> sorát    tartalmazó tábla, a következő eleme egy, a forrástábla következő <code>pageSize</code> sorát tartalmazó tábla, stb.


## Examples

### Example #1 
Öt rekordot tartalmazó tábla felosztása két-két rekordot tartalmazó táblákra.
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
