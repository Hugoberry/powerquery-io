---
title: Table.LastN
---

# Table.LastN


Devuelve el último número especificado de filas.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Devuelve las últimas filas de la tabla <code>table</code>, en función del valor de <code>countOrCondition</code>:    <ul>    <li> Si <code>countOrCondition</code> es un número, se devolverán esas filas a partir de la posición (final - <code>countOrCondition</code>). </li>    <li> Si <code>countOrCondition</code> es una condición, se devolverán las filas que la cumplan en posición ascendente hasta que una fila no lo haga.</li></ul>


## Examples

### Example #1 
Buscar las últimas dos filas de la tabla.
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
Buscar las últimas filas donde [a] &gt; 0 en la tabla.
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
