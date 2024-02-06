---
title: Date.Year
---

# Date.Year


वर्ष घटक लौटाता है.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

प्रदान किए गए <code>datetime</code> मान, <code>dateTime</code> का वर्ष घटक लौटाता है.


## Examples

### Example #1 
वर्ष को #datetime(2011, 12, 31, 9, 15, 36) में प्राप्त करें.
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
