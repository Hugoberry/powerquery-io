---
title: Table.MinN
---

# Table.MinN


Devolve a(s) fila(s) máis pequena(s) usando os criterios indicados.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Devolve a(s) fila(s) máis pequena(s) da `table`, indicados os `comparisonCriteria`. Despois de ordenar as filas, débese especificar o parámetro `countOrCondition` para filtrar aínda máis o resultado. Teña en conta que o algoritmo de ordenación non garante un resultado ordenado fixo. O parámetro `countOrCondition` pode aceptar varias formas:

-   Se se especifica un número, devólvese unha lista de ata `countOrCondition` elementos en orde ascendente.
-   Se se especifica unha condición, devólvense unha lista de elementos que inicialmente cumpren a condición. Cando un elemento non cumpre a condición, non se teñen en conta máis elementos.


## Examples

### Example #1
Buscar a fila co valor máis pequeno na columna \[a\] coa condición \[a\] &lt; 3, na táboa. As filas están ordenadas antes de aplicar o filtro.
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
Buscar a fila co valor máis pequeno na columna \[a\] coa condición \[b\] &lt; 0, na táboa. As filas están ordenadas antes de aplicar o filtro.
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
