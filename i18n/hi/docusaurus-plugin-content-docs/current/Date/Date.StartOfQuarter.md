---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

तिमाही के शुरू में लौटाता है.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

उस तिमाही के प्रारंभ में लौटाता है जिसमें <code>dateTime</code> है.      <code>dateTime</code> एक <code>date</code>, <code>datetime</code>, या <code>datetimezone</code> मान होना चाहिए.


## Examples

### Example #1 
10 अक्टूबर, 2011, 8:00 पूर्वाह्न के लिए तिमाही के शुरू में प्राप्त करें.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
