---
title: List.Dates
---

# List.Dates


## Description

Формирует список значений date по первоначальному значению, количеству и значению приращения продолжительности.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Возвращает список значений <code>date</code> размера <code>count</code>, начиная с <code>start</code>. Данное значение приращения <code>step</code> является значением <code>duration</code>, которое добавляется к каждому значению.


## Examples

### Example #1 
Создать список из пяти значений, начиная с новогодней ночи (#date(2011, 12, 31)), с увеличением значения на один день (#duration(1, 0, 0, 0)).
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
