---
title: Date.Month
---

# Date.Month


Ay bileşenini döndürür.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Sağlanan <code>datetime</code> değeri olan <code>dateTime</code> değerinin ay bileşenini döndürür.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) içindeki ayı bulur.
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
