---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Pašalinami nurodyti stulpeliai.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Pašalinami nurodyti <code>columns</code> iš pateikto <code>table</code>.    Jei nurodyto stulpelio nėra, pateikiama klaida, nebent pasirinktinis parametras <code>missingField</code> nurodo alternatyvų veikimą (pvz., <code>MissingField.UseNull</code> arba <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Pašalinkite stulpelį [Phone] iš lentelės.
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
Bandykite pašalinti neegzistuojantį stulpelį iš lentelės.
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
