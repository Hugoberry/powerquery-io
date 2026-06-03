---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Devuelve una tabla donde todas las columnas tienen como prefijo el texto dado.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Devuelve una tabla donde todos los nombres de columna de la `table` proporcionada tienen como prefijo el texto dado, `prefix`, más un punto en el formato `prefix.ColumnName`.


## Examples

### Example #1
Anteponer a las columnas "MyTable" en la tabla.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
