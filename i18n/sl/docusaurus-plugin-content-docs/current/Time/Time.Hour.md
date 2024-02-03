---
title: Time.Hour
---

# Time.Hour


## Description

Vrne komponento ure.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Vrne komponento ure podane vrednosti <code>time</code>, <code>datetime</code>ali <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Poiščite vrednost ure v #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
