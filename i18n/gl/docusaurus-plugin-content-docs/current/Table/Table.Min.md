---
title: Table.Min
---

# Table.Min


## Description

Devolve a fila máis pequena ou un valor predefinido usando os criterios indicados.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Devolve a(s) fila(s) máis pequena(s) da <code>table</code>, indicados os <code>comparisonCriteria</code>. Se a táboa está baleira, devólvese o valor opcional <code>default</code>.


## Examples

### Example #1 
Buscar a fila co valor máis pequeno na columna [a] da táboa.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Buscar a fila co valor máis pequeno na columna [a] da táboa. Devolver -1 se está baleira.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
