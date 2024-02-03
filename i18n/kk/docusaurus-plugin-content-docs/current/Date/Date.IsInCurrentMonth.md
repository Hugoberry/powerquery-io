---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы ай ішінде орын алатынын көрсетеді.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы <code>dateTime</code> күн/уақыт мәнінің ағымдағы ай ішінде орын алатынын көрсетеді.      <ul>      <li><code>dateTime</code>: есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
