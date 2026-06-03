---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Gibt eine Tabelle mit den Spalten in der angegebenen Reihenfolge zurück.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Gibt eine Tabelle auf der Grundlage der Eingabe „`table`“ zurück, deren Spalten in der mithilfe von „`columnOrder`“ angegebenen Reihenfolge sortiert sind. Spalten, die in der Liste nicht angegeben sind, werden nicht neu sortiert. Ist die Spalte nicht vorhanden, wird ein Fehler ausgelöst, sofern nicht der optionale Parameter `missingField` eine Alternative angibt (z. B. `MissingField.UseNull` oder `MissingField.Ignore`).


## Examples

### Example #1
Vertauscht die Reihenfolge der Spalten "\[Phone\]" und "\[Name\]" in der Tabelle.
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
Vertauscht die Reihenfolge der Spalten "\[Phone\]" und "\[Address\]" oder verwendet "MissingField.Ignore" in der Tabelle. Die Tabelle wird nicht geändert, weil die Spalte "\[Address\]" nicht vorhanden ist.
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
