---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Indica se qualquer das linhas existentes na tabela satisfaz a condição especificada.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Indica se qualquer uma das linhas em <code>table</code> correspondem ao <code>condition</code> especificado. Devolve <code>true</code> se qualquer linha corresponder; caso contrário, devolve <code>false</code>.


## Examples

### Example #1 
Determinar se qualquer um dos valores de linha na coluna [a] é par na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Determinar se qualquer um dos valores de linha é [a = 1, b = 2], na tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
