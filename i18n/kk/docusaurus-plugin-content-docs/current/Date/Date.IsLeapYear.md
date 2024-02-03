---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Осы күн кібісе жылға жататын-жатпайтынын көрсетеді.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Осы <code>dateTime</code> күн/уақыт мәні кібісе жылға жататын-жатпайтынын көрсетеді.  <ul>        <li><code>dateTime</code>: есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; арқылы көрсетілген 2012 жыл кібісі жылы болып табылатынын анықтау.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
