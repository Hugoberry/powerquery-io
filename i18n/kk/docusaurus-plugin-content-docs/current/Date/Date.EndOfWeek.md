---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Аптаның соңын қайтарады.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын аптаның соңын қайтарады.Бұл функция осы салыстырмалы есептеу үшін аптаның бірінші күнін орнату үшін қосымша <code>Day</code>, <code>firstDayOfWeek</code> параметрін қабылдайды. Әдепкі мәні — <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: аптаның соңғы күні есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні</li>        <li><code>firstDayOfWeek</code>: <i>[Міндетті емес]</i> аптаның бірінші күнін білдіретін <code>Day.Type</code> мәні. Ықтимал мәндер: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> және <code>Day.Saturday</code>. Әдепкі мән — <code>Day.Sunday</code>.</li>      </ul>


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
