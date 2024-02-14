---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Devuelve una tabla con las filas quitadas de la tabla de entrada que contienen un error en al menos una de las celdas. Si se especifica una lista de columnas, solo las celdas de las columnas especificadas se inspeccionan en busca de errores.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Devuelve una tabla con las filas quitadas de la tabla de entrada que contienen un error en al menos una de las celdas. Si se especifica una lista de columnas, solo las celdas de las columnas especificadas se inspeccionan en busca de errores.


## Examples

### Example #1 
Quitar el valor de error de la primera fila.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
