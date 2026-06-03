---
title: Time.EndOfHour
---

# Time.EndOfHour


Saat sonunu döndürür.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Kesirlik saniyeler dahil olmak üzere `dateTime` tarafından temsil edilen saat sonunu döndürür. Saat dilimi bilgileri korunur.

-   `dateTime`: Kendisinden itibaren saatin sonunun hesaplandığı `time`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
14.05.2011 17:00:00 için saatin sonunu alır.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
17.05.2011 17:00:00 -7:00 için saatin sonunu alır.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
