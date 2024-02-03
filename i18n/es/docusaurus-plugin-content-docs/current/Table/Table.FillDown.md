---
title: Table.FillDown
---

# Table.FillDown


## Description

Propaga el valor de una celda anterior a las celdas con valor NULL por debajo de la columna.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Devuelve una tabla del <code>table</code> especificado donde el valor de una celda anterior se propaga a las celdas con valor NULL por debajo de la <code>columns</code> especificada.


## Examples

### Example #1 
Devuelve una tabla con los valores NULL en la columna [Place] llena con el valor por encima de la tabla.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
