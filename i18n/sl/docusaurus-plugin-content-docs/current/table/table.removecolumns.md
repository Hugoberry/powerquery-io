---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Odstrani navedene stolpce.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Odstrani navedeni stolpec `columns` iz podane tabele `table`. Če izbrani stolpec ne obstaja, se prikaže sporočilo o napaki, razen če izbirni parameter `missingField` določa nadomestno vedenje (na primer `MissingField.UseNull` ali `MissingField.Ignore`).


## Examples

### Example #1
Odstranite stolpec \[Telefon\] iz tabele.
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
Poskusite odstraniti neobstoječ stolpec iz tabele.
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
