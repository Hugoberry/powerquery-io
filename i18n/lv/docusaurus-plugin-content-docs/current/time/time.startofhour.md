---
title: Time.StartOfHour
---

# Time.StartOfHour


Atgriež stundas sākumu.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Atgriež stundas sākumu, kas apzīmēts ar `dateTime`. `dateTime` jābūt vērtībai `time`, `datetime` vai `datetimezone`.


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
