---
title: List.RemoveRange
---

# List.RemoveRange


## Description

निर्दिष्ट स्थिति पर प्रारंभ होने वाले मानों की गणना संख्या निकालता है.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

निर्दिष्ट स्थिति, <code>index</code>, पर प्रारंभ होने वाले <code>list</code> के <code>count</code> मान निकालता है.


## Examples

### Example #1 
अनुक्रमणिका 4 पर प्रारंभ होने वाली सूची \{1, 2, 3, 4, -6, -2, -1, 5} के 3 मान निकालें.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
