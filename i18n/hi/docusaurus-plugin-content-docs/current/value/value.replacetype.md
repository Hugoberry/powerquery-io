---
title: Value.ReplaceType
---

# Value.ReplaceType


मान के प्रकार को बदलता है.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

प्रदान किए गए <code>type</code> से <code>value</code> का प्रकार बदलता है.


## Examples

### Example #1 
अधिक विशिष्ट प्रकार से रिकॉर्ड का डिफ़ॉल्ट प्रकार बदलें.
```powerquery
Type.RecordFields(
    Value.Type(
        Value.ReplaceType(
            [Column1 = 123],
            type [Column1 = number]
        )
    )
)[Column1][Type]
```

Result: 
```powerquery
type number
```




## Category
Values.Types
