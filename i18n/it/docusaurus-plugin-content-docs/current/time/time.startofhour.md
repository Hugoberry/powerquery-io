---
title: Time.StartOfHour
---

# Time.StartOfHour


Restituisce l&#39;inizio dell’ora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Restituisce l’inizio dell’ora rappresentato da <code>dateTime</code>.    <code>dateTime</code> deve essere un valore <code>time</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Trovare l&#39;inizio dall&#39;ora per il 10 ottobre 2011, 8.10.32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
