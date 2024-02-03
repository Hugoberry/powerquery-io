---
title: Time.Minute
---

# Time.Minute


## Description

Dakika bileşenini döndürür.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Sağlanan <code>time</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olan <code>dateTime</code> değerinin dakika bileşenini döndürür.


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
