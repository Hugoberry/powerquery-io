---
title: Record.Field
---

# Record.Field


Returns the value of the specified field in a record.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Returns the value of the specified `field` in the `record`. If the field is not found, an error is raised.


## Examples

### Example #1
Find the value of field "CustomerID" in the record.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
