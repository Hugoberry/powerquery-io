---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Reordonează câmpurile specificate în ordinea nouă.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnează o înregistrare după reordonarea câmpurilor din <code>record</code> în ordinea câmpurilor specificate în lista <code>fieldOrder</code>. Valorile pentru câmp sunt păstrate, iar câmpurile nelistate în <code>fieldOrder</code> sunt lăsate în poziţia originală.


## Examples

### Example #1 
Reordonați unele dintre câmpurile din înregistrare.
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
