---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Indica se qualquer linha da tabela atende à condição especificada.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Indica se qualquer linha da <code>table</code> corresponde à <code>condition</code> especificada. Retornará <code>true</code> se qualquer linha for correspondente; do contrário, <code>false</code> será retornado.


## Examples

### Example #1 
Determine se algum valor de linha da coluna [a] será par na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Determine se algum valor de linha será [a = 1, b = 2] na tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
