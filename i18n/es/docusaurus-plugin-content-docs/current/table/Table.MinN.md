---
title: Table.MinN
---

# Table.MinN


Devuelve las filas menores con los criterios dados.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Devuelve las filas mayores de <code>table</code>, dado el <code>comparisonCriteria</code>. Una vez ordenadas las filas, el parámetro <code>countOrCondition</code> debe especificarse para filtrar más el resultado. Tenga en cuenta que el algoritmo de ordenación no puede garantizar un resultado ordenado fijo. El parámetro <code>countOrCondition</code> puede adoptar varios formatos:    <ul>        <li> Si se especifica un número, se devuelve una lista de hasta <code>countOrCondition</code> elementos en orden ascendente. </li>        <li> Si se especifica una condición, se devuelve una lista de los elementos que cumplen inicialmente la condición. Una vez un elemento no cumple la condición, no se consideran más elementos. </li> </ul>


## Examples

### Example #1 
Buscar la fila con el valor menor de la columna [a] con la condición [a] &lt; 3, en la tabla. Las filas están ordenadas antes de aplicar el filtro.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Buscar la fila con el valor menor de la columna [a] con la condición [b] &lt; 0, en la tabla. Las filas están ordenadas antes de aplicar el filtro.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
