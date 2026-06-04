---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indica se todos os rexistros da táboa cumpren a condición especificada.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica se todos os rexistros da `table` coinciden coa `condition` indicada. Devolve `true` se todas as filas coinciden, se non, `false`.


## Examples

### Example #1
Determinar se todos os valores de fila na columna \[a\] son pares na táboa.
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
Buscar se todos os valores de fila son \[a = 1, b = 2\],na táboa `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
