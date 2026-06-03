---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Retorna uma ou mais posições de qualquer linha especificada na tabela.


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

Retorna as posições de linha da `table` da primeira ocorrência da lista de `rows`. Retornará -1 se nenhuma ocorrência for encontrada.

-   `table`: a tabela de entrada.
-   `rows`: a lista de linhas na tabela para localizar as posições.
-   `occurrence`: *(Opcional)* Especifica quais ocorrências da linha retornar.
-   `equationCriteria`: *(Opcional)* Controla a comparação entre as linhas da tabela.


## Examples

### Example #1
Localize a posição da primeira ocorrência de \[a = 2, b = 4\] ou \[a = 6, b = 8\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Localize a posição de todas as ocorrências de \[a = 2, b = 4\] ou \[a = 6, b = 8\] na tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
