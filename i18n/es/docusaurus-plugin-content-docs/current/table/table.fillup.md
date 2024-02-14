---
title: Table.FillUp
---

# Table.FillUp


Propaga el valor de una celda a las celdas con valor NULL por encima de la columna.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Devuelve una tabla del <code>table</code> especificado donde el valor de la celda siguiente se propaga a las celdas con valor NULL por encima de la <code>columns</code> especificada.


## Examples

### Example #1 
Devuelve una tabla con los valores NULL en la columna [Column2] rellenos con el valor por debajo de ellos de la tabla.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
