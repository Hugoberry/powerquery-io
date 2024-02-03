---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Atgriež stundas sākumu.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Atgriež stundas sākumu, kas apzīmēts ar <code>dateTime</code>.    <code>dateTime</code> jābūt vērtībai <code>time</code>, <code>datetime</code> vai <code>datetimezone</code>.


## Examples

### Example #1 
Atrodiet stundas sākumu 2011. gada 10. oktobrim, plkst. 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
