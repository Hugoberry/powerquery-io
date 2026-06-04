---
title: Record.RemoveFields
---

# Record.RemoveFields


Mengalih keluar medan yang ditentukan daripada rekod input.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Mengembalikan rekod yang mengalih keluar semua medan yang ditentukan dalam senarai `fields` daripada input `record`. Jika medan yang ditentukan tidak wujud, ralat akan dipaparkan.


## Examples

### Example #1
Alih keluarkan medan "Price" daripada rekod.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Alih keluarkan medan "Price" dan "Item" daripada rekod.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
