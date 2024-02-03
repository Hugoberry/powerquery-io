---
title: Time.Second
---

# Time.Second


## Description

सेकंड घटक लौटाता है.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

प्रदान किए गए <code>time</code>, <code>datetime</code>, या <code>datetimezone</code> मान का सेकंड घटक लौटाता है, <code>dateTime</code>.


## Examples

### Example #1 
तिथिसमय मान से दूसरा मान प्राप्त करें.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
