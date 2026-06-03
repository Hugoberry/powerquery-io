---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Devolve uma tabela com as últimas N linhas removidas.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Devolve uma tabela que não contém as últimas `countOrCondition` linhas da tabela `table`. O número de linhas removidas depende do parâmetro opcional `countOrCondition`.

-   Se `countOrCondition` for omitido, só é removida a última linha.
-   Se `countOrCondition` for um número, será removido esse número de linhas (a partir do fim).
-   Se `countOrCondition` for uma condição, serão removidas as linhas que satisfaçam a condição até que uma linha não satisfaça a condição.


## Examples

### Example #1
Remover a última linha da tabela.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Remover as últimas linhas em que \[CustomerID\] > 2 da tabela.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
