---
title: Record.FieldCount
---

# Record.FieldCount


Returns the number of fields in the record.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Returns the number of fields in the record <code>record</code>.


## Examples

### Example #1 
Find the number of fields in the record.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
