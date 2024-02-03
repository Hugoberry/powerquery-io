---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Crea una lista de listas anidadas de valores de columna a partir de una tabla.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Crea una lista de listas anidadas a partir de la tabla <code>table</code>.  Cada elemento de lista es una lista interna que contiene los valores de columna.


## Examples

### Example #1 
Crear una lista de valores de columna a partir de la tabla.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
