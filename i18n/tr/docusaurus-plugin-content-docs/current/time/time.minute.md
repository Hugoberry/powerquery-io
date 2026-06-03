---
title: Time.Minute
---

# Time.Minute


Dakika bileşenini döndürür.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Sağlanan `time`, `datetime` veya `datetimezone` değeri olan `dateTime` değerinin dakika bileşenini döndürür.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36) içindeki dakikayı bulur.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
