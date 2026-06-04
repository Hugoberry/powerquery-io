---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы ай ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы `dateTime` күн/уақыт мәнінің ағымдағы ай ішінде орын алатынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік күн ағымдағы айда екенін анықтау.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
