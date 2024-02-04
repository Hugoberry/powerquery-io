---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Devolve uma tabela apenas com as linhas da tabela de entrada que contenham um erro em pelo menos uma das células. Se for especificada uma lista de colunas, apenas as células existentes nas colunas especificadas serão inspecionadas relativamente a erros.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Devolve uma tabela apenas com as linhas da tabela de entrada que contenham um erro em pelo menos uma das células. Se for especificada uma lista de colunas, apenas as células existentes nas colunas especificadas serão inspecionadas relativamente a erros.


## Examples

### Example #1 
Selecionar nomes de clientes com erros nas linhas correspondentes.
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
