---
title: Time.EndOfHour
---

# Time.EndOfHour


Zwraca koniec godziny.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Zwraca koniec godziny reprezentowany przez <code>dateTime</code>, w tym ułamkowe części sekund. Informacje dotyczące strefy czasowej są zachowywane.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, na podstawie której jest obliczany koniec godziny.</li>      </ul>


## Examples

### Example #1 
Pobierz koniec godziny z wartości 2011-05-14 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Pobierz koniec godziny z wartości 2011-05-17 17:00:00 -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
