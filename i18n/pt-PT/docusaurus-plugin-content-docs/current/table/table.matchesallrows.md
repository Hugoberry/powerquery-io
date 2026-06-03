---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indica se todas as linhas existentes na tabela satisfazem a condição especificada.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica se todas as linhas existentes em `table` satisfazem o `condition` especificado. Devolve `true` se todas as linhas corresponderem; caso contrário, devolve `false`.


## Examples

### Example #1
Determinar se todos os valores de linha na coluna \[a\] são pares na tabela.
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
Determinar se todos os valores de linha são \[a = 1, b = 2\], na tabela `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
