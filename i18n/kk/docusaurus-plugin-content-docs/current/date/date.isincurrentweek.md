---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы апта ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы `dateTime` күн/уақыт мәнінің ағымдағы апта ішінде орын алатынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік күн ағымдағы аптада екенін анықтау.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
