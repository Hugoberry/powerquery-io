---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Substitui um número de linhas especificado, <code>count</code>, na entrada <code>table</code>, pelo <code>rows</code> especificado, começando depois de <code>offset</code>. O parâmetro <code>rows</code> é uma lista de registos.    <ul>       <li><code>table</code>: a tabela em que a substituição é efetuada.</li>       <li><code>offset</code>: o número de linhas a ignorar antes de efetuar a substituição.</li>       <li><code>count</code>: o número de linhas a substituir.</li>       <li><code>rows</code>: a lista de registos de linha a inserir em <code>table</code> na localização especificada por <code>offset</code>.</li>    </ul>


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
