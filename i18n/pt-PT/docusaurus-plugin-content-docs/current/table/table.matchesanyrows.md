---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Indica se qualquer das linhas existentes na tabela satisfaz a condição especificada.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica se qualquer uma das linhas em `table` correspondem ao `condition` especificado. Devolve `true` se qualquer linha corresponder; caso contrário, devolve `false`.


## Examples

### Example #1
Determinar se qualquer um dos valores de linha na coluna \[a\] é par na tabela `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Determinar se qualquer um dos valores de linha é \[a = 1, b = 2\], na tabela `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
