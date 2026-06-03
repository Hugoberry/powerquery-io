---
title: Time.StartOfHour
---

# Time.StartOfHour


Renvoie le début de l’heure.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Renvoie le début de l’heure représenté par `dateTime`. `dateTime` doit être une valeur `time`, `datetime`, ou `datetimezone`.


## Examples

### Example #1
Recherchez le début de l’heure du 10 octobre 2011, 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
