---
title: Table.SelectRows
---

# Table.SelectRows


## Description

Seleciona as linhas que atendem à função condition.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Details

Retorna uma tabela de linhas da <code>table</code> que corresponde à seleção <code>condition</code>.


## Examples

### Example #1 
Seleciona as linhas da tabela em que os valores da coluna [CustomerID] são maiores que 2.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Seleciona as linhas da tabela em que os nomes não contêm um &#34;B&#34;.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
