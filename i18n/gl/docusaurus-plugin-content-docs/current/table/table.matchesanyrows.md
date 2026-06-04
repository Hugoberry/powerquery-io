---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Indica se algunha das filas da táboa cumpre a condición especificada.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica se algunha das filas da `table` coinciden coa `condition` indicada. Devolve `true` se algunha das filas coinciden, se non, `false`.


## Examples

### Example #1
Determinar se algún dos valores de fila na columna \[a\] son pares na táboa `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Determinar se algún dos valores de fila son \[a = 1, b = 2\] na táboa `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
