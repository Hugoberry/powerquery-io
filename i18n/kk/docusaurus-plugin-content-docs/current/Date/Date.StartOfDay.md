---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Күннің басын қайтарады.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> арқылы көрсетілетін күнінің басын қайтарады.    <code>dateTime</code> <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні болуы керек.


## Examples

### Example #1 
10 қазан 2011 ж., 8:00 үшін күннің басын табу.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
