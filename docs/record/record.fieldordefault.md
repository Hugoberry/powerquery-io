---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Returns the value of the specified field in a record or the default value if the field is not found.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Returns the value of the specified field `field` in the record `record`. If the field is not found, the optional `defaultValue` is returned.


## Examples

### Example #1
Find the value of field "Phone" in the record, or return null if it doesn't exist.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Find the value of field "Phone" in the record, or return the default if it doesn't exist.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
