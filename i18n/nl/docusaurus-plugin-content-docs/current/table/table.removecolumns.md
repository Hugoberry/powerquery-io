---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Verwijdert de opgegeven kolommen.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Hiermee verwijdert u de opgegeven `columns` uit de aangeleverde `table`. Als de opgegeven kolom niet bestaat, wordt er een fout gegenereerd, tenzij de optionele parameter `missingField` een alternatief gedrag opgeeft (bijvoorbeeld `MissingField.UseNull` of `MissingField.Ignore`).


## Examples

### Example #1
Kolom \[Phone\] uit de tabel verwijderen.
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
Probeer een niet-bestaande kolom uit de tabel te verwijderen.
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
