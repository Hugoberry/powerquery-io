---
title: Date.Month
---

# Date.Month


महीना घटक लौटाता है.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

प्रदान किए गए <code>datetime</code> मान, <code>dateTime</code> का महीना घटक लौटाता है.


## Examples

### Example #1 
महीने को #datetime(2011, 12, 31, 9, 15, 36) में प्राप्त करें.
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
