---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indica si totes les files de la taula compleixen la condició donada.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica si totes les files de la `table` coincideixen amb la `condition` donada. Retorna `true` si totes les files coincideixen i `false` en cas contrari.


## Examples

### Example #1
Determina si tots els valors de files de la columna \[a\] són parells a la taula.
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
Troba si tots els valors de files són \[a = 1, b = 2\], a la taula `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
