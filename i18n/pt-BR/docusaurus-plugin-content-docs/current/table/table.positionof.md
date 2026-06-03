---
title: Table.PositionOf
---

# Table.PositionOf


Retorna uma ou mais posições da linha na tabela.


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

Retorna a posição de linha da primeira ocorrência da `row` na `table` especificada. Retornará -1 se nenhuma ocorrência for encontrada.

-   `table`: a tabela de entrada.
-   `row`: a linha na tabela da qual localizar a posição.
-   `occurrence`: *(Opcional)* Especifica quais ocorrências da linha retornar.
-   `equationCriteria`: *(Opcional)* Controla a comparação entre as linhas da tabela.


## Examples

### Example #1
Localize a posição da primeira ocorrência de \[a = 2, b = 4\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Localize a posição da segunda ocorrência de \[a = 2, b = 4\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Localize a posição de todas as ocorrências de \[a = 2, b = 4\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
