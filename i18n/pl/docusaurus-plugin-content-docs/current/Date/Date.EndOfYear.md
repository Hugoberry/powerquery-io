---
title: Date.EndOfYear
---

# Date.EndOfYear


Zwraca koniec roku.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Zwraca koniec roku, który zawiera <code>dateTime</code>, w tym ułamkowe części sekund. Informacje dotyczące strefy czasowej są zachowywane.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, na podstawie której jest obliczany koniec roku.</li>      </ul>


## Examples

### Example #1 
Pobierz koniec roku z wartości 2011-05-14 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Pobierz koniec godziny z wartości 2011-05-17 17:00:00 -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
