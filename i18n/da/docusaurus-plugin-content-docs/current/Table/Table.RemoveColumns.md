---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Fjerner de angivne kolonner.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Fjerner den angivne <code>columns</code> fra den udleverede <code>table</code> . 
Hvis den angivne kolonne ikke findes, udløses der en fejl, medmindre den valgfri parameter <code>missingField</code> angiver en alternativ funktionsmåde (f.eks. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Fjern kolonnen [Phone] fra tabellen.
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
Prøv at fjerne en ikke-eksisterende kolonne fra tabellen.
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
