---
title: Record.FieldCount
---

# Record.FieldCount


रिकॉर्ड की फ़ील्ड की संख्या लौटाता है.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

रिकॉर्ड <code>record</code> की फ़ील्ड की संख्या लौटाता है.


## Examples

### Example #1 
रिकॉर्ड में फ़ील्ड की संख्या ढूँढें.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
