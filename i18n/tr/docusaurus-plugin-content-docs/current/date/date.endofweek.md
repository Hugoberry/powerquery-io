---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Haftanın sonunu döndürür.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

`dateTime` içeren haftanın sonunu döndürür. Bu işlev, bu göreli hesaplama için haftanın ilk günü olarak ayarlamak üzere isteğe bağlı `Day` `firstDayOfWeek` değerini alır. Varsayılan değer `Day.Sunday`’dır.

-   `dateTime`: Kendisinden itibaren haftanın son gününün hesaplandığı `date`, `datetime` veya `datetimezone` değeri
-   `firstDayOfWeek`: *(İsteğe bağlı)* Haftanın ilk gününü temsil eden bir `Day.Type` değeri. Olası değerler: `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` and `Day.Saturday`. Varsayılan değer `Day.Sunday`’dır.


## Examples

### Example #1
14.05.2011 için haftanın sonunu alır.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Haftanın ilk günü Pazar olmak üzere 17.05.2011 17:00:00 -7:00 için haftanın sonunu alır.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
