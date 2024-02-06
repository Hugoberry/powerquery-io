---
title: Table.ColumnCount
---

# Table.ColumnCount


Devuelve el número de columnas de la tabla.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Remarks

Devuelve el número de columnas de la tabla <code>table</code>.


## Examples

### Example #1 
Buscar el número de columnas de la tabla.
```powerquery
Table.ColumnCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
