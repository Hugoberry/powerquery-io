---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Повертає число, яке вказує, на який квартал року припадає дата.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Повертає число від 1 до 4, яке вказує, на який квартал року припадає дата `dateTime`. `dateTime` може бути значенням `date`, `datetime` або `datetimezone`.


## Examples

### Example #1
Знайти, на який квартал року припадає дата #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
