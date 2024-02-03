---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы апта ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы <code>dateTime</code> күн/уақыт мәнінің ағымдағы апта ішінде орын алатынын көрсетеді.      <ul>      <li><code>dateTime</code>: есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
