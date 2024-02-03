---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Odstráni zadané stĺpce.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Odstráni zadané stĺpce <code>columns</code> z uvedenej tabuľky <code>table</code>.    Ak zadaný stĺpec neexistuje, vyskytne sa chyba, pokiaľ voliteľný parameter <code>missingField</code> neurčí alternatívne správanie (napr. <code>MissingField.UseNull</code> alebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Odstráňte z tabuľky stĺpec [Phone].
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
Skúste z tabuľky odstrániť neexistujúci stĺpec.
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
