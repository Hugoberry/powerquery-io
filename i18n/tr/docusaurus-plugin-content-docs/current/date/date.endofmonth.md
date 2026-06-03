---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Ay sonunu döndürür.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

`dateTime` içeren ay sonunu döndürür.

-   `dateTime`: Kendisinden itibaren ayın sonunun hesaplandığı `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
14.05.2011 için ayın sonunu alır.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
17.05.2011 17:00:00 -7:00 için ayın sonunu alır.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
