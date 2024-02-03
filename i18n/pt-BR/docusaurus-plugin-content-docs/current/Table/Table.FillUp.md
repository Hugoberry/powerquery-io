---
title: Table.FillUp
---

# Table.FillUp


## Description

Propaga o valor de uma célula para as células de valor nulo acima na coluna.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Retorna uma tabela do <code>table</code> especificado em que o valor da próxima célula é propagado para as células de valor nulo acima no <code>columns</code> especificado.


## Examples

### Example #1 
Retornar uma tabela com os valores nulos da coluna [Column2] preenchidos com o valor abaixo deles na tabela.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
