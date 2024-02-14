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

Entfernt das angegebene <code>columns</code> aus dem angegebenen <code>table</code>.    Wenn die angegebene Spalte nicht existiert, wird ein Fehler ausgelöst, es sei denn, der optionale Parameter <code>missingField</code> gibt ein alternatives Verhalten an (zum Beispiel, <code>MissingField.UseNull</code> oder <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Entfernt die Spalte &#34;[Phone]&#34; aus der Tabelle.
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
