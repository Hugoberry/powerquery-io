---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Substitui todas as linhas especificadas pelas linhas fornecidas.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Substitui todas as linhas especificadas em <code>table</code> pelas linhas fornecidas. As linhas a substituir e as substituições são especificadas em <code>replacements</code>, utilizando o formato \{old, new}.    É possível especificar um parâmetro opcional <code>equationCriteria</code> para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1 
Substituir as linhas [a = 1, b = 2] e [a = 2, b = 3] por [a = -1, b = -2],[a = -2, b = -3] na tabela.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
