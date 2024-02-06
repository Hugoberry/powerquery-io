---
title: Time.StartOfHour
---

# Time.StartOfHour


Saat başlangıcını döndürür.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

<code>dateTime</code> tarafından temsil edilen saat başlangıcını döndürür.    <code>dateTime</code>, bir <code>time</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olmalıdır.


## Examples

### Example #1 
10 Ekim 2011, 08:10:32 için saatin başlangıcını bulun.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
