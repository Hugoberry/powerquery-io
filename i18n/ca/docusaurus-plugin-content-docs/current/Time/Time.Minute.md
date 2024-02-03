---
title: Time.Minute
---

# Time.Minute


## Description

Retorna el component minut.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Retorna el component minut del valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> proporcionat, <code>dateTime</code>.


## Examples

### Example #1 
Troba el minut en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
