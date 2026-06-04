---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Аптаның соңын қайтарады.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

`dateTime` мәнін қамтитын аптаның соңын қайтарады. Бұл функция осы салыстырмалы есептеу үшін аптаның бірінші күнін орнату үшін қосымша `Day`, `firstDayOfWeek` параметрін қабылдайды. Әдепкі мәні — `Day.Sunday`.

-   `dateTime`: аптаның соңғы күні есептелетін `date`, `datetime` немесе `datetimezone` мәні
-   `firstDayOfWeek`: *(Міндетті емес)* аптаның бірінші күнін білдіретін `Day.Type` мәні. Ықтимал мәндер: `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` және `Day.Saturday`. Әдепкі мән – `Day.Sunday`.


## Examples

### Example #1
5/14/2011 үшін аптаның соңын алу.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
5/17/2011 05:00:00 PM -7:00 үшін аптаның соңын алу, жексенбі аптаның бірінші күні болады.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
