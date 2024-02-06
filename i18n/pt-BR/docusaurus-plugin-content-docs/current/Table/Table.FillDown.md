---
title: Table.FillDown
---

# Table.FillDown


Propaga o valor de uma célula anterior para as células com valor nulo abaixo da coluna.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Retorna uma tabela do <code>table</code> especificado em que o valor de uma célula anterior é propagado para as células de valor nulo abaixo no <code>columns</code> especificado.


## Examples

### Example #1 
Retornar uma tabela com os valores nulos da coluna [Place] preenchidos com o valor acima deles na tabela.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
