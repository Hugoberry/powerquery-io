---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Жылдың басын қайтарады.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын жылдың басын қайтарады.    <code>dateTime</code> <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні болуы керек.


## Examples

### Example #1 
10 қазан 2011 ж., 8:10:32 үшін жылдың басын табу.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
