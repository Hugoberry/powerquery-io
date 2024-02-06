---
title: Date.StartOfYear
---

# Date.StartOfYear


वर्ष के शुरू में लौटाता है.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

उस साल के प्रारंभ में लौटाता है जिसमें <code>dateTime</code> है.    <code>dateTime</code> एक <code>date</code>, <code>datetime</code>, या <code>datetimezone</code> मान होना चाहिए.


## Examples

### Example #1 
अक्टूबर 10, 2011, 8:10:32 पूर्वाह्न के लिए वर्ष की शुरुआत का पता लगाएँ.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
