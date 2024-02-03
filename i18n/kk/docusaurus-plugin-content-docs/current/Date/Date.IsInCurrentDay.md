---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы күн ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы <code>dateTime</code> күн/уақыт мәнінің ағымдағы күн ішінде орын алатынын көрсетеді.      <ul>      <li><code>dateTime</code>: есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
