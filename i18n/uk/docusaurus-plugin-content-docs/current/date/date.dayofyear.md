---
title: Date.DayOfYear
---

# Date.DayOfYear


Повертає число від 1 до 366, що представляє день року.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Повертає число, що представляє день року в наданому значенні `date`, `datetime` або `datetimezone`, `dateTime`.


## Examples

### Example #1
День у році для 1 березня 2011 р.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
