---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы жыл ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы `dateTime` күн/уақыт мәнінің ағымдағы жыл ішінде орын алатынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік күн ағымдағы жылда екенін анықтау.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
