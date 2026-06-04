---
title: Date.Day
---

# Date.Day


A nap összetevőt adja vissza.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Egy `date`, `datetime` vagy `datetimezone` típusú érték nap összetevőjét adja vissza.

-   `dateTime`: Egy `date`, `datetime` vagy `datetimezone` érték, amelyből a nap összetevő ki lesz nyerve.


## Examples

### Example #1
A 2011. 05. 14., 17:00:00 dátumot és időt jelölő `date`, `datetime` vagy `datetimezone` típusú érték nap összetevőjének megállapítása
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
