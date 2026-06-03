---
title: Record.Field
---

# Record.Field


किसी रिकॉर्ड में निर्दिष्ट फ़ील्ड का मान लौटाता है.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

`record` में निर्दिष्ट `field` का मान लौटाता है. अगर फ़ील्ड नहीं मिलती है, तो एक त्रुटि आएगी.


## Examples

### Example #1
रिकॉर्ड में फ़ील्ड "CustomerID" का मान ढूँढें.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
