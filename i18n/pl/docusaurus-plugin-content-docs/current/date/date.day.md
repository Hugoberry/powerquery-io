---
title: Date.Day
---

# Date.Day


Zwraca składnik dni.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Zwraca składnik dni z danej wartości typu `date`, `datetime` lub `datetimezone`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, z której jest wyodrębniany składnik dni.


## Examples

### Example #1
Pobierz składnik dni z wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę i godzinę 2011-05-14 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
