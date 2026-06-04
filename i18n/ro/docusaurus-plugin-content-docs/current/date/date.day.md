---
title: Date.Day
---

# Date.Day


Returnează componenta day.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Returnează componenta zi a unei valori `date`, `datetime` sau `datetimezone`.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` din care este extrasă componenta zi.


## Examples

### Example #1
Obţineţi componenta day a unei valori `date`, `datetime` sau `datetimezone` reprezentând data şi ora 14/05/2011 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
