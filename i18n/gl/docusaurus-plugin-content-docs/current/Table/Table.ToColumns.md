---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Crea unha lista de listas aniñadas de valores de columnas dunha táboa.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Crea unha lista de listas aniñadas da táboa, <code>table</code>.  Cada elemento da lista é unha lista interna que contén os valores de columna.


## Examples

### Example #1 
Crear unha lista de valores de columna da táboa.
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
