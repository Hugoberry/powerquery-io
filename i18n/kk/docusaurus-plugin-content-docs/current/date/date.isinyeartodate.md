---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы жыл ішінде орын алатынын және ағымдағы күні немесе одан бұрын болатынын көрсетеді.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы `dateTime` күн/уақыт мәнінің ағымдағы жыл ішінде орын алатынын және ағымдағы күні немесе одан бұрын болатынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік уақыттың жылдың басынан болып жатқанын анықтау.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
