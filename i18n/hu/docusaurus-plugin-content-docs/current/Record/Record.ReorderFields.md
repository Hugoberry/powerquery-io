---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Átrendezi a megadott mező(ke)t az új sorrendbe.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Egy olyan rekordot ad vissza, amelyben át vannak rendezve a(z) <code>record</code> mezői a(z) <code>fieldOrder</code> listán megadott mezősorrendbe. A mezőértékek megőrződnek, és a(z) <code>fieldOrder</code> listán nem szereplő mezők az eredeti helyükön maradnak.


## Examples

### Example #1 
Újrarendezi a rekordban levő egyes mezőket.
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
