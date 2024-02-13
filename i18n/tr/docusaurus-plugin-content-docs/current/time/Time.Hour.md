---
title: Time.Hour
---

# Time.Hour


Saat bileşenini döndürür.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Sağlanan <code>time</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olan <code>dateTime</code> değerinin saat bileşenini döndürür.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) içindeki saati bulur.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
