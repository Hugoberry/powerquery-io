---
title: Time.Hour
---

# Time.Hour


## Description

Retorna el component hora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Retorna el component hora del valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> proporcionat, <code>dateTime</code>.


## Examples

### Example #1 
Troba l&#39;hora en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
