---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Devuelve una tabla con las columnas en el orden especificado.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Devuelve una tabla de la entrada <code>table</code>, con las columnas en el orden especificado por <code>columnOrder</code>. Las columnas que no se especifiquen en la lista no se volverán a ordenar.     Si la columna no existe, se inicia una excepción a menos que el parámetro opcional <code>missingField</code> especifique una alternativa (por ejemplo, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Cambiar el orden de las columnas [Phone] y [Name] en la tabla.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Cambiar el orden de las columnas [Phone] y [Address] o usar &#34;MissingField.Ignore&#34; en la tabla. No cambia la tabla porque la columna [Address] no existe.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
