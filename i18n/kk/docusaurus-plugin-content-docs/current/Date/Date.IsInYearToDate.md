---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы күннің ағымдағы жыл ішінде орын алатынын және ағымдағы күні немесе одан бұрын болатынын көрсетеді.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн және уақыт арқылы анықталғандай осы <code>dateTime</code> күн/уақыт мәнінің ағымдағы жыл ішінде орын алатынын және ағымдағы күні немесе одан бұрын болатынын көрсетеді.      <ul>      <li><code>dateTime</code>: есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
