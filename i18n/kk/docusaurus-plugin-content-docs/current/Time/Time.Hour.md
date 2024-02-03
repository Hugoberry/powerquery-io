---
title: Time.Hour
---

# Time.Hour


## Description

Сағат құрамдасын қайтарады.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Көрсетілген <code>time</code>, <code>datetime</code> немесе <code>datetimezone</code> мәнінің сағат құрамдасын қайтарады, <code>dateTime</code>.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі уақытты табу.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
