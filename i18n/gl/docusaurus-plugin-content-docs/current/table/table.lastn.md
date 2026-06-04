---
title: Table.LastN
---

# Table.LastN


Devolve o último número especificado de filas.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Devolve a(s) última(s) fila(s) da táboa, `table`, dependendo do valor de `countOrCondition`:

-   Se `countOrCondition` é un número, devolverase ese número de filas comezando na posición (final - `countOrCondition`).
-   Se `countOrCondition` é unha condición, devolveranse as filas que cumpren a condición en posición ascendente ata a fila que non a cumpre.


## Examples

### Example #1
Buscar as dúas últimas filas da táboa.
```powerquery
Table.LastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Buscar as últimas filas onde \[a\] > 0 na táboa.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
