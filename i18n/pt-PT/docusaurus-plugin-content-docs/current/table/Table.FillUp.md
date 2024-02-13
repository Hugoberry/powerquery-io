---
title: Table.FillUp
---

# Table.FillUp


Propaga o valor de uma célula para as células com valor nulo acima na coluna.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Devolve uma tabela a partir de <code>table</code> especificado em que o valor da próxima célula é propagado para as células com valor nulo acima do <code>columns</code> especificado.


## Examples

### Example #1 
Devolve uma tabela com os valores nulos existentes na coluna [Column2] preenchidos com o valor abaixo deles a partir da tabela.
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
