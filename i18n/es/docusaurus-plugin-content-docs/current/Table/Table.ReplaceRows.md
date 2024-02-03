---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Sustituye el intervalo de filas especificado con las filas proporcionadas.


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

Sustituye un número de filas especificado, <code>count</code>, en la entrada <code>table</code> con la <code>rows</code> especificada, a partir de <code>offset</code>. El parámetro <code>rows</code> es una lista de registros.    <ul>       <li><code>table</code>: la tabla donde se realiza el reemplazo.</li>       <li><code>offset</code>: el nNúmero de filas que se omitirán antes de hacer el reemplazo.</li>       <li><code>count</code>: el número de filas que se reemplazan.</li>       <li><code>rows</code>: la lista de registros de fila que se insertan en la <code>table</code> en la ubicación especificada por <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
A partir de la posición 1, reemplazar 3 filas.
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
