---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Aplica los cambios de nombre con el formato \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Realiza los cambios de nombre indicados a las columnas de la tabla <code>table</code>. Una operación de reemplazo <code>renames</code> consta de una lista de dos valores, el nombre de columna anterior y el nuevo, proporcionados en una lista.    Si la columna no existe, se inicia una excepción a menos que el parámetro opcional <code>missingField</code> especifique una alternativa (por ejemplo, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Reemplazar el nombre de columna &#34;CustomerNum&#34; con &#34;CustomerID&#34; en la tabla.
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
Reemplazar el nombre de columna &#34;CustomerNum&#34; con &#34;CustomerID&#34; y &#34;PhoneNum&#34; con &#34;Phone&#34; en la tabla.
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
Reemplazar el nombre de columna &#34;NewCol&#34; con &#34;NewColumn&#34; en la tabla y omitirlo si la columna no existe.
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
