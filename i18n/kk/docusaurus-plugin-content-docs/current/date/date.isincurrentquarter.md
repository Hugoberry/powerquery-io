---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы тоқсан ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы `dateTime` күн/уақыт мәнінің ағымдағы тоқсан ішінде орын алатынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік күн ағымдағы тоқсанда екенін анықтау.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
