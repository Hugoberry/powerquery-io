---
title: Table.Transpose
---

# Table.Transpose


## Description

Convierte las columnas en filas y las filas en columnas.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Convierte las columnas en filas y las filas en columnas.


## Examples

### Example #1 
Crear las filas de la tabla de pares nombre-valor en columnas.
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
