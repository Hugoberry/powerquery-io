---
title: Table.PositionOf
---

# Table.PositionOf


Devolve as posições da linha na tabela.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Devolve a posição de linha da primeira ocorrência do `row` no `table` especificado. Devolve -1 se não for encontrada qualquer ocorrência.

-   `table`: a tabela de entrada.
-   `row`: a linha na tabela da qual se deve encontrar a posição.
-   `occurrence`: *(opcional)* especifica que ocorrências da linha devem ser devolvidas.
-   `equationCriteria`: *(opcional)* controla a comparação entre as linhas da tabela.


## Examples

### Example #1
Determinar a posição da primeira ocorrência de \[a = 2, b = 4\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Determinar a posição da segunda ocorrência de \[a = 2, b = 4\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Determinar a posição de todas as ocorrências de \[a = 2, b = 4\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
