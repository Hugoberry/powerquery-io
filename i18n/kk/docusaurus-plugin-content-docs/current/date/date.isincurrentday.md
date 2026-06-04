---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы күн ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы `dateTime` күн/уақыт мәнінің ағымдағы күн ішінде орын алатынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік күн ағымдағы күнде екенін анықтау.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
