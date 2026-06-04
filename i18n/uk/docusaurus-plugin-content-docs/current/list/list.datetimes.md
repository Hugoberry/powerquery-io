---
title: List.DateTimes
---

# List.DateTimes


Створює список значень datetime із заданими початковим значенням, кількістю значень та значенням приросту тривалості.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Повертає список значень `datetime` за розміром `count`, починаючи з `start`. Заданий приріст, `step`, – це значення `duration`, яке додається до кожного значення.


## Examples

### Example #1
Створити список з 10 значень, починаючи з 5 хвилин до Нового року (#datetime(2011, 12, 31, 23, 55, 0)) і з приростом на 1 хвилину (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
