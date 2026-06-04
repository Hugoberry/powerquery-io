---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Odstráni zadané stĺpce.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Odstráni zadané stĺpce `columns` z uvedenej tabuľky `table`. Ak zadaný stĺpec neexistuje, vyskytne sa chyba, pokiaľ voliteľný parameter `missingField` neurčí alternatívne správanie (napr. `MissingField.UseNull` alebo `MissingField.Ignore`).


## Examples

### Example #1
Odstráňte z tabuľky stĺpec \[Phone\].
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
