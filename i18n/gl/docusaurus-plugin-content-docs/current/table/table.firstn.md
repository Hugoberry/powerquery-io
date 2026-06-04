---
title: Table.FirstN
---

# Table.FirstN


Devolve a primeira conta das filas especificadas.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Devolve a(s) primeira(s) fila(s) da táboa `table`, dependendo do valor de `countOrCondition`:

-   Se `countOrCondition` é un número, ese número de filas (comezando no principio) vaise devolver.
-   Se `countOrCondition` é unha condición, devolveranse as filas que cumpren a condición ata a fila que non a cumpre.


## Examples

### Example #1
Buscar as dúas primeiras filas da táboa.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Buscar as primeiras filas onde \[a\] > 0 na táboa.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
