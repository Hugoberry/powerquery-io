---
title: Time.Second
---

# Time.Second


Saniye bileşenini döndürür.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Sağlanan <code>time</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olan <code>dateTime</code> değerinin saniye bileşenini döndürür.


## Examples

### Example #1 
Bir tarih saat değerinden ikinci değeri bulur.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
