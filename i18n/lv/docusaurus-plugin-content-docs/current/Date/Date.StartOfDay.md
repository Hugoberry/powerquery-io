---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Atgriež dienas sākumu.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Atgriež dienas sākumu, kas apzīmēts ar <code>dateTime</code>.    <code>dateTime</code> jābūt vērtībai <code>date</code>, <code>datetime</code> vai <code>datetimezone</code>.


## Examples

### Example #1 
Atrodiet dienas sākumu 2011. gada 10. oktobrim, plkst. 8.00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
