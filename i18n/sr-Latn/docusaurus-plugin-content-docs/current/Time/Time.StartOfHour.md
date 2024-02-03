---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Vraća početak sata.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Vraća početak sata koji predstavlja <code>dateTime</code>.    <code>dateTime</code> mora da bude vrednost <code>time</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronađite početak sata za 10. oktobar 2011. u 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
