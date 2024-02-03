---
title: Time.Minute
---

# Time.Minute


## Description

Vrne komponento minute.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Vrne komponento minute podane vrednosti <code>time</code>, <code>datetime</code> ali <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Poiščite vrednost minute v #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
