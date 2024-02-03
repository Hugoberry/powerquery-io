---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы жыл ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы <code>dateTime</code> күн/уақыт мәнінің ағымдағы жыл ішінде орын алатынын көрсетеді.      <ul>      <li><code>dateTime</code>: есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
