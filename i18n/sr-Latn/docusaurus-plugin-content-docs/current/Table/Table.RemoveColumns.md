---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Uklanja navedene kolone.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Uklanja navedenu <code>columns</code> iz obezbeđene <code>table</code>.     Ako navedena kolona ne postoji, doći će do greške, osim ako opcionalni parametar „<code>missingField</code>“ ne navodi alternativno ponašanje (na primer, <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Uklanjanje kolone [Telefon] iz tabele.
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
Pokušajte da uklonite nepostojeću kolonu iz tabele.
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
