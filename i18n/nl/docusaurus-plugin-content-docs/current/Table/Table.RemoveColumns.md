---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Verwijdert de opgegeven kolommen.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Hiermee verwijdert u de opgegeven <code>columns</code> uit de aangeleverde <code>table</code>.    Als de opgegeven kolom niet bestaat, wordt er een fout gegenereerd, tenzij de optionele parameter <code>missingField</code> een alternatief gedrag opgeeft (bijvoorbeeld <code>MissingField.UseNull</code> of <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Kolom [Phone] uit de tabel verwijderen.
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
