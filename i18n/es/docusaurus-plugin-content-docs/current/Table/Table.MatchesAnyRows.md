---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Indica si alguna fila de la tabla cumple la condición especificada.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Indica si alguna fila de la <code>table</code> cumple la <code>condition</code> especificada. Devuelve <code>true</code> si coincide alguna fila, <code>false</code> en caso contrario.


## Examples

### Example #1 
Determine si algún valor de fila de la columna [a] es par en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Determine si algún valor de fila es [a = 1, b = 2], en la tabla &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
