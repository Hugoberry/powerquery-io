---
title: Table.FillDown
---

# Table.FillDown


Propaga o valor de uma célula anterior para as células com valor nulo abaixo na coluna.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Devolve uma tabela a partir de <code>table</code> especificado em que o valor de uma célula anterior é propagado para as células com valor nulo abaixo do <code>columns</code> especificado.


## Examples

### Example #1 
Devolve uma tabela com os valores nulos existentes na coluna [Local] preenchidos com o valor acima deles a partir da tabela.
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
