---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Criar uma cópia de uma linha para cada valor na respetiva lista, com base numa coluna de listas numa tabela especificada.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Com base num <code>table</code>, em que <code>column</code> é uma lista de valores, divide a lista numa linha para cada valor. Os valores existentes nas outras colunas são duplicados em cada linha nova criada.


## Examples

### Example #1 
Divide a coluna de lista [Nome] existente na tabela nos valores da lista.
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
