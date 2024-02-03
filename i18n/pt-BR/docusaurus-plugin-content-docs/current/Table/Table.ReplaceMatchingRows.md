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

Substitui todas as linhas especificadas na <code>table</code> pelas linhas fornecidas. As linhas a serem substituídas e as substituições serão especificadas em <code>replacements</code>, usando o formato \{old, new}.    Um parâmetro <code>equationCriteria</code> opcional pode ser especificado para controlar a comparação entre as linhas da tabela.


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
