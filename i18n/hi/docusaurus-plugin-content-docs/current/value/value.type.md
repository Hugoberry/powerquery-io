---
title: Value.Type
---

# Value.Type


दिए गए मान का प्रकार लौटाता है.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

दिए गए मान का प्रकार लौटाता है.

-   `value`: वह मान जिसका प्रकार लौटाया गया.


## Examples

### Example #1
निर्दिष्ट संख्या का प्रकार लौटाएँ.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
निर्दिष्ट दिनांक का प्रकार लौटाएँ.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
निर्दिष्ट रिकॉर्ड का प्रकार लौटाएँ.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
