---
title: Record.SelectFields
---

# Record.SelectFields


Menghasilkan data yang hanya berisi bidang yang ditetapkan.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Menghasilkan data yang hanya mencakup bidang yang ditetapkan dalam daftar `fields` dari input `record`.


## Examples

### Example #1
Memilih bidang "Item" dan "Price" dalam data.
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
