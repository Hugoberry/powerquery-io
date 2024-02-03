---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Күн жылдың қай тоқсанына жататынын көрсететін санды қайтарады.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

<code>dateTime</code> күні жылдың қай тоқсанына жататынын көрсететін 1 және 4 арасындағы санды қайтарады. <code>dateTime</code> <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні болуы мүмкін.


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
