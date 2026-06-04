---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Осы күн кібісе жылға жататын-жатпайтынын көрсетеді.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Осы `dateTime` күн/уақыт мәні кібісе жылға жататын-жатпайтынын көрсетеді.

-   `dateTime`: есептелетін `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
`#date(2012, 01, 01)` арқылы көрсетілген 2012 жыл кібісі жылы болып табылатынын анықтау.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
