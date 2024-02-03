---
title: Table.Split
---

# Table.Split


## Description

Divide a tabela especificada em uma lista de tabelas usando o tamanho da página especificado.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Divide <code>table</code> em uma lista de tabelas em que o primeiro elemento da lista é uma tabela que contém as primeiras <code>pageSize</code> linhas da    tabela de origem, o próximo elemento da lista é uma tabela que contém as próximas <code>pageSize</code> linhas da tabela de origem, etc.


## Examples

### Example #1 
Divida uma tabela de cinco registros em tabelas com dois registros cada.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
