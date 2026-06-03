---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Entfernt die angegebenen Spalten.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Entfernt das angegebene `columns` aus dem angegebenen `table`. Wenn die angegebene Spalte nicht existiert, wird ein Fehler ausgelöst, es sei denn, der optionale Parameter `missingField` gibt ein alternatives Verhalten an (zum Beispiel, `MissingField.UseNull` oder `MissingField.Ignore`).


## Examples

### Example #1
Entfernt die Spalte "\[Phone\]" aus der Tabelle.
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
Versuchen Sie, eine nicht vorhandene Spalte aus der Tabelle zu entfernen.
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
