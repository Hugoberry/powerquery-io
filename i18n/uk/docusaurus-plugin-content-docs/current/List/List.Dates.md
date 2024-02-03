---
title: List.Dates
---

# List.Dates


## Description

Створює список значень date із заданими початковим значенням, кількістю значень та значенням приросту тривалості.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Повертає список значень <code>date</code> за розміром <code>count</code>, починаючи з <code>start</code>. Заданий приріст, <code>step</code>, – це значення <code>duration</code>, яке додається до кожного значення.


## Examples

### Example #1 
Створити список із 5 значень, починаючи з передодня Нового року (#date(2011, 12, 31)), з приростом на 1 день (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
