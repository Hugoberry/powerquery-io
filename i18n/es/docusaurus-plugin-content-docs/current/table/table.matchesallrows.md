---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indica si todas las filas de la tabla cumplen la condición especificada.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica si todas las filas de la `table` cumplen la `condition` especificada. Devuelve `true` si coinciden todas las filas, `false` en caso contrario.


## Examples

### Example #1
Determine si todos los valores de fila de la columna \[a\] son pares en la tabla.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Buscar si todos los valores de fila son \[a = 1, b = 2\], en la tabla `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
