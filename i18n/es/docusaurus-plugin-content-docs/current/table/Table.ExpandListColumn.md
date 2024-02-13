---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Dada una columna de listas de una tabla, crear una copia de una fila para cada valor de la lista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dado un <code>table</code>, donde <code>column</code> es una lista de valores, divide la lista en una fila para cada valor. Los valores de otras columnas se duplican en cada nueva fila creada.


## Examples

### Example #1 
Dividir la columna de la lista [Name] en la tabla.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
