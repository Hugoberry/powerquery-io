---
title: Table.ColumnNames
---

# Table.ColumnNames


Retorna os nomes de coluna como uma lista.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Retorna os nomes de coluna na tabela <code>table</code> como uma lista de texto.


## Examples

### Example #1 
Localizar os nomes de coluna da tabela.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
