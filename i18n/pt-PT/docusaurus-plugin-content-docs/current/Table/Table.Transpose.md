---
title: Table.Transpose
---

# Table.Transpose


## Description

Transforma colunas em linhas e linhas em colunas.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Transforma colunas em linhas e linhas em colunas.


## Examples

### Example #1 
Transformar as linhas da tabela de pares nome-valor em colunas.
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
