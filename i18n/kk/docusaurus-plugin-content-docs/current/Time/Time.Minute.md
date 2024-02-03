---
title: Time.Minute
---

# Time.Minute


## Description

Минут құрамдасын қайтарады.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Көрсетілген <code>time</code>, <code>datetime</code> немесе <code>datetimezone</code> мәнінің минут құрамдасын қайтарады, <code>dateTime</code>.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі минутты табу.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
