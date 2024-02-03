---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Substituír o intervalo de filas coa(s) fila(s) especificada(s).


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

Substituír un número especificado de filas, <code>count</code>, da <code>table</code> de entrada co <code>rows</code> especificado, comezando despois de <code>offset</code>. O parámetro <code>rows</code> é unha lista de rexistros.    <ul>       <li><code>table</code>: a táboa onde se executa a substitución.</li>       <li><code>offset</code>: o número de filas que se vai ignorar antes de facer a substitución.</li>       <li><code>count</code>: o número de filas que se van substituír.</li>       <li><code>rows</code>: a lista de rexistros de fila que se van inserir na <code>table</code> na localización especificada por <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Comezando na posición 1, substituír 3 filas.
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
