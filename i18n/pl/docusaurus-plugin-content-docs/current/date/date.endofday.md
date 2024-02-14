---
title: Date.EndOfDay
---

# Date.EndOfDay


Zwraca koniec dnia.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Zwraca koniec dnia reprezentowany przez <code>dateTime</code>. Informacje o strefie czasowej są zachowywane.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, na podstawie której jest obliczany koniec dnia.</li>      </ul>


## Examples

### Example #1 
Pobierz koniec dnia z wartości 2011-05-14 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Pobierz koniec dnia z wartości 2011-05-17 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
