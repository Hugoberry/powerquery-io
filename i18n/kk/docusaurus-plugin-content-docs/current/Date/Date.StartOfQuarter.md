---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Тоқсанның басын қайтарады.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын тоқсанның басын қайтарады.    <code>dateTime</code> <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні болуы керек.


## Examples

### Example #1 
10 қазан 2011 ж., 8:00AM үшін тоқсанның басын табу.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
