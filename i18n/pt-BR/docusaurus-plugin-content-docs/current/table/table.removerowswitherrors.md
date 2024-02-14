---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Retorna uma tabela com as linhas removidas da tabela de entrada que contém um erro em, pelo menos, uma das células. Se uma lista de colunas for especificada, apenas as células das colunas especificadas serão inspecionadas quanto a erros.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Retorna uma tabela com as linhas removidas da tabela de entrada que contém um erro em, pelo menos, uma das células. Se uma lista de colunas for especificada, apenas as células das colunas especificadas serão inspecionadas quanto a erros.


## Examples

### Example #1 
Remove um valor de erro da primeira linha.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
