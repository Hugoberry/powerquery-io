---
title: Table.AlternateRows
---

# Table.AlternateRows


Mantém o deslocamento inicial, e alterna o uso e não uso das linhas a seguir.


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

Mantém o deslocamento inicial, e alterna o uso e não uso das linhas a seguir.

-   `table`: A tabela de entrada.
-   `offset`: O número de linhas a serem mantidos antes de iniciar as iterações.
-   `skip`: O número de linhas a serem removidos em cada iteração.
-   `take`: O número de linhas a serem mantidos em cada iteração.


## Examples

### Example #1
Retornar uma tabela a partir da tabela que, começando na primeira linha, ignora 1 valor e depois mantém 1 valor.
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
