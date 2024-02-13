---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Rimuove le colonne specificate.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Rimuove <code>columns</code> da <code>table</code>.    Se la colonna specificata non esiste, viene generato un errore a meno che il parametro facoltativo <code>missingField</code> non specifichi un comportamento alternativo, ad esempio <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>.


## Examples

### Example #1 
Rimuovere la colonna [Phone] dalla tabella.
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
Provare a rimuovere una colonna inesistente dalla tabella.
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
