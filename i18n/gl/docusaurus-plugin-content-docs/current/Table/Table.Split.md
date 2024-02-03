---
title: Table.Split
---

# Table.Split


## Description

Divide a táboa especificada nunha lista de táboas co tamaño de páxina especificado.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Divide <code>table</code> nunha lista de táboas onde o primeiro elemento da lista é unha táboa que contén as primeiras <code>pageSize</code> filas da    táboa de orixe, o seguinte elemento da lista é unha táboa que contén as seguintes <code>pageSize</code> filas da táboa de orixe etc.


## Examples

### Example #1 
Divida unha táboa de cinco rexistros en táboas con dous rexistros cada unha.
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
