---
title: Record.ReorderFields
---

# Record.ReorderFields


Reorders the field(s) specified into the new order.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returns a record after reordering the fields in <code>record</code> in the order of fields specified in list <code>fieldOrder</code>. Field values are maintained and fields not listed in <code>fieldOrder</code> are left in their original position.


## Examples

### Example #1 
Reorder some of the fields in the record.
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
