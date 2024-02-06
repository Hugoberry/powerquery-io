---
title: Record.FieldValues
---

# Record.FieldValues


Returns a list of the field values.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Returns a list of the field values in record <code>record</code>.


## Examples

### Example #1 
Find the field values in the record.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
