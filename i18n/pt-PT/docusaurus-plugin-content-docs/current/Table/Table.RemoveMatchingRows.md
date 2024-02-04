---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Remove todas as ocorrências das linhas especificadas da tabela.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Remove todas as ocorrências do <code>rows</code> especificado em <code>table</code>.    É possível especificar um parâmetro opcional <code>equationCriteria</code> para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1 
Remover quaisquer linhas em que [a = 1] na tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
