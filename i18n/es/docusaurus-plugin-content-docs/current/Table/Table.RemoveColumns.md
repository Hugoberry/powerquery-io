---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Quita las columnas especificadas.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Quita la <code>columns</code> especificada de <code>table</code> proporcionado.    Si la columna no existe, se produce un error a menos que el parámetro opcional <code>missingField</code> especifique un comportamiento alternativo (por ejemplo, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Quitar la columna [Phone] de la tabla.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Intente quitar una columna inexistente de la tabla.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
