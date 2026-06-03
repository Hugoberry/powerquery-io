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

`dateTime` tarafından temsil edilen saat başlangıcını döndürür. `dateTime`, bir `time`, `datetime` veya `datetimezone` değeri olmalıdır.


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
