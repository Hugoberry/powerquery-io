---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Retorna uma tabela apenas com as linhas da tabela de entrada que contêm um erro em, pelo menos, uma das células. Se uma lista de colunas for especificada, apenas as células das colunas especificadas serão inspecionadas quanto a erros.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Retorna uma tabela apenas com as linhas da tabela de entrada que contêm um erro em, pelo menos, uma das células. Se uma lista de colunas for especificada, apenas as células das colunas especificadas serão inspecionadas quanto a erros.


## Examples

### Example #1 
Seleciona os nomes de clientes com erros nas linhas.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
