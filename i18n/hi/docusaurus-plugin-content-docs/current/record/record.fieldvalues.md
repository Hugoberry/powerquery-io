---
title: Record.FieldValues
---

# Record.FieldValues


फ़ील्ड मान की सूची लौटाता है.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

रिकॉर्ड <code>record</code> के फ़ील्ड मान की सूची लौटाता है.


## Examples

### Example #1 
रिकॉर्ड में फ़ील्ड मान ढूँढें.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
