---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Substitui o intervalo de linhas especificado pelas linhas fornecidas.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Substitui um número de linhas especificado, `count`, na entrada `table`, pelo `rows` especificado, começando depois de `offset`. O parâmetro `rows` é uma lista de registos.

-   `table`: a tabela em que a substituição é efetuada.
-   `offset`: o número de linhas a ignorar antes de efetuar a substituição.
-   `count`: o número de linhas a substituir.
-   `rows`: a lista de registos de linha a inserir em `table` na localização especificada por `offset`.


## Examples

### Example #1
A partir da posição 1, substituir 3 linhas.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
