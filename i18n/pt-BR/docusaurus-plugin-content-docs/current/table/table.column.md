---
title: Table.Column
---

# Table.Column


Retorna uma coluna especificada de dados da tabela como uma lista.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Retorna a coluna de dados especificada por <code>column</code> da tabela <code>table</code> como uma lista.


## Examples

### Example #1 
Retornar os valores da coluna [Name] da tabela.
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
