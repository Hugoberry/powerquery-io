---
title: Record.RemoveFields
---

# Record.RemoveFields


Removes the specified field(s) from the input record.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returns a record that removes all the fields specified in list `fields` from the input `record`. If the field specified does not exist, an error is raised.


## Examples

### Example #1
Remove the field "Price" from the record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Remove the fields "Price" and "Item" from the record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
