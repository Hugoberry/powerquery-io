---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Elimina as columnas especificadas.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Elimina as <code>columns</code> especificadas do <code>table</code> fornecido.    Se a columna especificada non existe, aparece un erro a menos que o parámetro opcional <code>missingField</code> especifique un comportamento alternativo (por exemplo, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Eliminar a columna [Phone] da táboa.
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
Tenta eliminar unha columna inexistente da táboa.
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
