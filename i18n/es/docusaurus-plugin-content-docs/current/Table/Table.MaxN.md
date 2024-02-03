---
title: Table.MaxN
---

# Table.MaxN


## Description

Devuelve las filas mayores con los criterios dados.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Devuelve las filas mayores de <code>table</code>, dados el <code>comparisonCriteria</code>.    Después de ordenar las filas, es necesario especificar el parámetro <code>countOrCondition</code> para filtrar aún más el resultado. Tenga en cuenta que el algoritmo de ordenación no puede garantizar un resultado ordenado fijo. El parámetro <code>countOrCondition</code> puede adoptar varios formatos:    <ul>        <li>Si se especifica un número, se devuelve una lista de hasta <code>countOrCondition</code> elementos en orden ascendente. </li>        <li>Si se especifica una condición, se devuelve una lista de los elementos que cumplen inicialmente la condición. Si un elemento no cumple la condición, no se considerarán más elementos. </li> </ul>


## Examples

### Example #1 
Buscar la fila con el valor máximo de la columna [a] con la condición [a] &gt; 0, en la tabla. Las filas están ordenadas antes de aplicar el filtro.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Buscar la fila con el valor máximo de la columna [a] con la condición [b] &gt; 0, en la tabla. Las filas están ordenadas antes de aplicar el filtro.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
