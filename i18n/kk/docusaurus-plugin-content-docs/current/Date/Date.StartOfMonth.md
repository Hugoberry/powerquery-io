---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Айдың басын қайтарады.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын айдың басын қайтарады.    <code>dateTime</code> <code>date</code> немесе <code>datetimezone</code> мәні болуы тиіс.


## Examples

### Example #1 
10 қазан 2011 ж., 8:10:32 үшін айдың басын табу.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
