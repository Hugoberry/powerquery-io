---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Zwraca koniec kwartału.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Zwraca koniec kwartału, który zawiera <code>dateTime</code>. Strefa czasowa jest zachowywana.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, na podstawie której jest obliczany koniec kwartału.</li>      </ul>


## Examples

### Example #1 
Znajdź koniec kwartału dla daty 10 października 2011 r. 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
