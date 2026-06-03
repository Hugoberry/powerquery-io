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

Sağlanan `time`, `datetime` veya `datetimezone` değeri olan `dateTime` değerinin saat bileşenini döndürür.


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
