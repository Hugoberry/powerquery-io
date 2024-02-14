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

Gibt eine Tabelle auf der Grundlage der Eingabe '<code>table</code>' zurück, deren Spalten in der mithilfe von '<code>columnOrder</code>' angegebenen Reihenfolge sortiert sind. Spalten, die in der Liste nicht angegeben sind, werden nicht neu sortiert.     Wenn die Spalte nicht vorhanden ist, wird eine Ausnahme ausgelöst, sofern nicht mithilfe des optionalen Parameters '<code>missingField</code>' eine Alternative angegeben wurde (beispielsweise <code>MissingField.UseNull</code> oder <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Vertauscht die Reihenfolge der Spalten &#34;[Phone]&#34; und &#34;[Name]&#34; in der Tabelle.
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
Vertauscht die Reihenfolge der Spalten &#34;[Phone]&#34; und &#34;[Address]&#34; oder verwendet &#34;MissingField.Ignore&#34; in der Tabelle. Die Tabelle wird nicht geändert, weil die Spalte &#34;[Address]&#34; nicht vorhanden ist.
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
