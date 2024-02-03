---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Preuredi navedena polja v nov vrstni red.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrne zapis po preurejanju polj v <code>record</code> v vrstni red polj, navedenih na seznamu <code>fieldOrder</code>. Vrednosti polj so ohranjene in polja, ki niso navedena v <code>fieldOrder</code>, ostanejo na prvotnem položaju.


## Examples

### Example #1 
Prerazvrstite nekaj polj v zapisu.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
