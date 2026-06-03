---
title: Table.AlternateRows
---

# Table.AlternateRows


Mantém o desvio inicial e, em seguida, alterna entre utilizar e ignorar as linhas seguintes.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Mantém o desvio inicial e, em seguida, alterna entre utilizar e ignorar as linhas seguintes.

-   `table`: a tabela de entrada.
-   `offset`: o número de linhas a manter entre as iterações de início.
-   `skip`: o número de linhas a remover em cada iteração.
-   `take`: o número de linhas a manter em cada iteração.


## Examples

### Example #1
Devolver uma tabela a partir da tabela que, a partir da primeira linha, salta 1 valor e, em seguida, mantém 1 valor.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
