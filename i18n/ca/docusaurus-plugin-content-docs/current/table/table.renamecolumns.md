---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplica canvis de nom de la forma \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Duu a terme els canvis de nom donats a les columnes de la taula `table`. Una operació de substitució `renames` està formada per una llista de dos valors, el nom de columna antic i el nom de columna nou, proporcionats en una llista. Si no existeix la columna, es produeix un error tret que el paràmetre opcional `missingField` especifiqui una alternativa (és a dir, `MissingField.UseNull` o `MissingField.Ignore`).


## Examples

### Example #1
Substitueix el nom de columna "CustomerNum" per "CustomerID" a la taula.
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
Substitueix el nom de columna "CustomerNum" per "CustomerID" i "PhoneNum" per "Phone" a la taula.
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
Substitueix el nom de columna "NewCol" per "NewColumn" a la taula i ignora'l si no existeix la columna.
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
