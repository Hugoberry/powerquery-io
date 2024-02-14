---
title: Date.StartOfMonth
---

# Date.StartOfMonth


महीने के शुरू में लौटाता है.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

उस महीने क शुरू में लौटाता है जिसमें <code>dateTime</code> है. <code>dateTime</code> एक <code>date</code> या <code>datetime</code> मान होना चाहिए.


## Examples

### Example #1 
10 अक्टूबर, 2011, 8:10:32 पूर्वाह्न के लिए महीने के शुरू में प्राप्त करें.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
