---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplica los cambios de nombre con el formato \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Realiza los cambios de nombre indicados a las columnas de la tabla `table`. Una operación de reemplazo `renames` consta de una lista de dos valores, el nombre de columna anterior y el nuevo, proporcionados en una lista. Si la columna no existe, se produce un error a menos que el parámetro opcional `missingField` especifique una alternativa (por ejemplo, `MissingField.UseNull` o `MissingField.Ignore`).


## Examples

### Example #1
Reemplazar el nombre de columna "CustomerNum" con "CustomerID" en la tabla.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Reemplazar el nombre de columna "CustomerNum" con "CustomerID" y "PhoneNum" con "Phone" en la tabla.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Reemplazar el nombre de columna "NewCol" con "NewColumn" en la tabla y omitirlo si la columna no existe.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
