---
title: Date.Day
---

# Date.Day


Повертає компонент дня.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Повертає компонент дня значення `date`, `datetime` або `datetimezone`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, з якого видобувається компонент дня.


## Examples

### Example #1
Отримання компонента дня значення `date`, `datetime` або `datetimezone`, що представляє дату й час 14.05.11 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
