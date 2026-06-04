---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Elimina as columnas especificadas.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Elimina as `columns` especificadas do `table` fornecido. Se a columna especificada non existe, aparece un erro a menos que o parámetro opcional `missingField` especifique un comportamento alternativo (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Eliminar a columna \[Phone\] da táboa.
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
