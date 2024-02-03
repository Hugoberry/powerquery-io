---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Transforma les files de la taula amb la funció de transformació especificada.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Crea una <code>llista</code> aplicant l'operació <code>transform</code> a cada fila de <code>table</code>.


## Examples

### Example #1 
Transformeu les files d&#39;una taula en una llista de números.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Transformeu les files d&#39;una taula numèrica en registres textuals.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
