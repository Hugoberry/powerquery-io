---
title: Table.RenameColumns
---

# Table.RenameColumns


Wendet Umbenennungen im Format "\{old, new\}" an.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Nimmt die angegebenen Umbenennungen der Spalten in der Tabelle „`table`“ vor. Ein Ersetzungsvorgang (`renames`) besteht aus einer Liste mit zwei Werten (alter und neuer Spaltenname), die in einer Liste bereitgestellt wird. Ist die Spalte nicht vorhanden, wird ein Fehler ausgelöst, sofern nicht der optionale Parameter `missingField` eine Alternative angibt (z. B. `MissingField.UseNull` oder `MissingField.Ignore`).


## Examples

### Example #1
Ersetzt den Spaltennamen "CustomerNum" in der Tabelle durch "CustomerID".
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
Ersetzt den Spaltennamen "CustomerNum" in der Tabelle durch "CustomerID" und "PhoneNum" durch "Phone".
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
Ersetzt den Spaltennamen "NewCol" in der Tabelle durch "NewColumn". Wenn die Spalte nicht vorhanden ist, wird der Vorgang ignoriert.
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
