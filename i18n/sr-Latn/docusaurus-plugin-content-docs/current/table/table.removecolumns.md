---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Uklanja navedene kolone.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Uklanja navedenu `columns` iz obezbeđene `table`. Ako navedena kolona ne postoji, doći će do greške, osim ako opcionalni parametar „`missingField`“ ne navodi alternativno ponašanje (na primer, `MissingField.UseNull` or `MissingField.Ignore`).


## Examples

### Example #1
Uklanjanje kolone \[Telefon\] iz tabele.
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
