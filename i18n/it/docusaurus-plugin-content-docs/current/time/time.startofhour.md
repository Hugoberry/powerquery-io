---
title: Time.StartOfHour
---

# Time.StartOfHour


Restituisce l'inizio dell’ora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Restituisce l’inizio dell’ora rappresentato da `dateTime`. `dateTime` deve essere un valore `time`, `datetime` o `datetimezone`.


## Examples

### Example #1
Trovare l'inizio dall'ora per il 10 ottobre 2011, 8.10.32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
