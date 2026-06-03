---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Devolve as posições de qualquer uma das linhas especificadas na tabela.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Devolve a(s) posição(ões) de linha a partir do `table` da primeira ocorrência da lista de `rows`. Devolve -1 se não for encontrada qualquer ocorrência.

-   `table`: a tabela de entrada.
-   `rows`: a lista de linhas na tabela da qual se devem encontrar as posições.
-   `occurrence`: *(opcional)* especifica que ocorrências da linha devem ser devolvidas.
-   `equationCriteria`: *(opcional)* controla a comparação entre as linhas da tabela.


## Examples

### Example #1
Determinar a posição da primeira ocorrência de \[a = 2, b = 4\] ou \[a = 6, b = 8\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Determinar a posição de todas as ocorrências de \[a = 2, b = 4\] ou \[a = 6, b = 8\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
