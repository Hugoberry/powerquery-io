---
title: Time.Hour
---

# Time.Hour


## Description

Restituisce il componente ora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Restituisce il componente ora del valore <code>time</code>, <code>datetime</code> o <code>datetimezone</code> specificato <code>dateTime</code>.


## Examples

### Example #1 
Trovare l&#39;ora in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
