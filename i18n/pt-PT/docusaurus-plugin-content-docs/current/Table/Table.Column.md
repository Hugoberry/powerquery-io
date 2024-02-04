---
title: Table.Column
---

# Table.Column


## Description

Devolve uma coluna especificada de dados a partir da tabela como uma lista.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Devolve a coluna de dados especificada por <code>column</code> a partir da tabela <code>table</code> como uma lista.


## Examples

### Example #1 
Determinar a data na coluna [Naome] a partir da tabela.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
