---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Dada uma coluna de listas em uma tabela, crie a cópia de uma linha para cada valor na lista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Dado um <code>table</code>, em que <code>column</code> é uma lista de valores, divida a lista em uma linha para cada valor. Os valores nas outras colunas são duplicados em cada nova linha criada.


## Examples

### Example #1 
Dividir a coluna de lista [Name] na tabela.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
