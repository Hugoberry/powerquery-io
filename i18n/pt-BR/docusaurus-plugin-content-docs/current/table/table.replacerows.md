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

Substitui um número especificado de linhas, <code>count</code>, na entrada <code>table</code> pelo <code>rows</code> especificado, iniciando após a <code>offset</code>. O parâmetro <code>rows</code> é uma lista de registros.    <ul>       <li><code>table</code>: A tabela em que a substituição é executada.</li>       <li><code>offset</code>: O número de linhas a serem ignoradas antes de fazer a substituição.</li>       <li><code>count</code>: O número de linhas a serem substituídas.</li>       <li><code>rows</code>: A lista de registros de linha a serem inseridos no <code>table</code> no local especificado pelo <code>offset</code>.</li>    </ul>


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
