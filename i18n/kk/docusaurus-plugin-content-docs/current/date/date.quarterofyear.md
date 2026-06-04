---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Күн жылдың қай тоқсанына жататынын көрсететін санды қайтарады.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

`dateTime` күні жылдың қай тоқсанына жататынын көрсететін 1 және 4 арасындағы санды қайтарады. `dateTime` `date`, `datetime` немесе `datetimezone` мәні болуы мүмкін.


## Examples

### Example #1
#date(2011, 12, 31) күні жылдың қай тоқсанына жататынын табу.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
