---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Vrátí číslo od 1 do 6 určující, do kterého týdne v měsíci spadá toto datum.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vrátí číslo od 1 do 6 určující, do kterého týdne v měsíci spadá datum `dateTime`.

-   `dateTime`: Hodnota `datetime`, pro kterou je určen týden v měsíci.


## Examples

### Example #1
Určete, na který týden připadá v roce 2011 15. března.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
