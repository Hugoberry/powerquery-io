---
title: Time.Second
---

# Time.Second


## Description

Секунд құрамдасын қайтарады.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Көрсетілген <code>time</code>, <code>datetime</code> немесе <code>datetimezone</code> мәнінің секунд құрамдасын қайтарады, <code>dateTime</code>.


## Examples

### Example #1 
datetime мәнінен секунд мәнін табыңыз.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
