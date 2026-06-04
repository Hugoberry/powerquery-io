---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Pašalinami nurodyti stulpeliai.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Pašalinami nurodyti `columns` iš pateikto `table`. Jei nurodyto stulpelio nėra, pateikiama klaida, nebent pasirinktinis parametras `missingField` nurodo alternatyvų veikimą (pvz., `MissingField.UseNull` arba `MissingField.Ignore`).


## Examples

### Example #1
Pašalinkite stulpelį \[Phone\] iš lentelės.
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
