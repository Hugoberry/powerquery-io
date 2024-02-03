---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Odstrani navedene stolpce.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Odstrani navedeni stolpec <code>columns</code> iz podane tabele <code>table</code>.    Če izbrani stolpec ne obstaja, se prikaže sporočilo o napaki, razen če izbirni parameter <code>missingField</code> določa nadomestno vedenje (na primer <code>MissingField.UseNull</code> ali <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Odstranite stolpec [Telefon] iz tabele.
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
