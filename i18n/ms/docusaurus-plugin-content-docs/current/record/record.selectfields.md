---
title: Record.SelectFields
---

# Record.SelectFields


Mengembalikan rekod yang mengandungi medan yang ditentukan sahaja.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Mengembalikan rekod yang termasuk medan yang ditentukan sahaja dalam senarai `fields` daripada input `record`.


## Examples

### Example #1
Pilih medan "Item" dan "Price" dalam rekod.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
