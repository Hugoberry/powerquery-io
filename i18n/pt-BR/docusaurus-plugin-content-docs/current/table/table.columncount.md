---
title: Table.ColumnCount
---

# Table.ColumnCount


Retorna o número de colunas na tabela.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Remarks

Retorna o número de colunas na tabela <code>table</code>.


## Examples

### Example #1 
Localizar o número de colunas na tabela.
```powerquery
Table.ColumnCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
