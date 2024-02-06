---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Degrada los encabezados de columna a la primera fila de valores.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Degrada los encabezados de columna (es decir, los nombres de columna) a la primera fila de valores. Los nombres de columna predeterminados son "Columna1", "Columna2" etc.


## Examples

### Example #1 
Disminuir el nivel de la primera fila de valores de la tabla.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
