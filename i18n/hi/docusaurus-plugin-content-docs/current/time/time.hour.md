---
title: Time.Hour
---

# Time.Hour


घंटा घटक लौटाता है.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

प्रदान किए गए <code>time</code>, <code>datetime</code>, या <code>datetimezone</code> मान का घंटा घटक लौटाता है, <code>dateTime</code>.


## Examples

### Example #1 
घंटे को #datetime(2011, 12, 31, 9, 15, 36) में प्राप्त करें.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
