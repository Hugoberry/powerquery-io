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

Substitui um número especificado de linhas, `count`, na entrada `table` pelo `rows` especificado, iniciando após a `offset`. O parâmetro `rows` é uma lista de registros.

-   `table`: A tabela em que a substituição é executada.
-   `offset`: O número de linhas a serem ignoradas antes de fazer a substituição.
-   `count`: O número de linhas a serem substituídas.
-   `rows`: A lista de registros de linha a serem inseridos no `table` no local especificado pelo `offset`.


## Examples

### Example #1
Começando na posição 1, substituir três linhas.
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
