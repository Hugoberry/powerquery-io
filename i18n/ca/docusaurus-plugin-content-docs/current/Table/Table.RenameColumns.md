---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Aplica canvis de nom de la forma \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Duu a terme els canvis de nom donats a les columnes de la taula <code>table</code>. Una operació de substitució <code>renames</code> està formada per una llista de dos valors, el nom de columna antic i el nom de columna nou, proporcionats en una llista.    Si no existeix la columna, es produeix una excepció tret que el paràmetre opcional <code>missingField</code> especifiqui una alternativa (és a dir, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Substitueix el nom de columna &#34;CustomerNum&#34; per &#34;CustomerID&#34; a la taula.
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
Substitueix el nom de columna &#34;CustomerNum&#34; per &#34;CustomerID&#34; i &#34;PhoneNum&#34; per &#34;Phone&#34; a la taula.
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
Substitueix el nom de columna &#34;NewCol&#34; per &#34;NewColumn&#34; a la taula i ignora&#39;l si no existeix la columna.
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
