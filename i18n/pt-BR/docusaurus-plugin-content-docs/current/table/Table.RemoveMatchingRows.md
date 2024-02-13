---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Remove todas as ocorrências das linhas especificadas da tabela.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Remove todas as ocorrências da <code>rows</code> especificada da <code>table</code>.    Um parâmetro <code>equationCriteria</code> opcional pode ser especificado para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1 
Remova qualquer linha onde [a = 1] da tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
