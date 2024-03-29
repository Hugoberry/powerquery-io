---
title: Table.TransformRows
---

# Table.TransformRows


Transforma las filas de la tabla con la función de transformación especificada.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Crea una <code>lista</code> aplicando la operación <code>transform</code> a cada fila en <code>table</code>.


## Examples

### Example #1 
Transformar las filas de una tabla en una lista de números.
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
Transformar las filas de una tabla numérica en registros textuales.
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
