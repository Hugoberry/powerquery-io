---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Retorna uma tabela com as N últimas linhas removidas.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Retorna uma tabela que não contém as `countOrCondition` últimas linhas da tabela `table`. O número de linhas removidas depende do parâmetro opcional `countOrCondition`.

-   Se `countOrCondition` for omitido, somente a última linha será removida.
-   Se `countOrCondition` for um número, essas várias linhas (começando na parte inferior) serão removidas.
-   Se `countOrCondition` for uma condição, as linhas que atenderem à condição serão removidas até que uma linha não esteja em conformidade com a condição.


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
Remover da tabela as últimas linhas em que \[CustomerID\] > 2.
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
