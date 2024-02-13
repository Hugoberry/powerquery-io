---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Devolve uma tabela com as linhas removidas da tabela de entrada que contenham um erro em pelo menos uma das células. Se for especificada uma lista de colunas, apenas as células existentes nas colunas especificadas serão inspecionadas relativamente a erros.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Devolve uma tabela com as linhas removidas da tabela de entrada que contenham um erro em pelo menos uma das células. Se for especificada uma lista de colunas, apenas as células existentes nas colunas especificadas serão inspecionadas relativamente a erros.


## Examples

### Example #1 
Remover valor de erro da primeira linha.
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
