---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Створює список значень datetimezone із заданими початковим значенням, кількістю значень та значенням приросту тривалості.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Повертає список значень <code>datetimezone</code> за розміром <code>count</code>, починаючи з <code>start</code>. Заданий приріст, <code>step</code>, – це значення <code>duration</code>, яке додається до кожного значення.


## Examples

### Example #1 
Створити список із 10 значень, починаючи з 5 хвилин до Нового року (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) і з приростом на 1 хвилину (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
