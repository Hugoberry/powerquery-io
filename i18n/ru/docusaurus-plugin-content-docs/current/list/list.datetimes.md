---
title: List.DateTimes
---

# List.DateTimes


Формирует список значений дат на основе первоначального значения, количества и значения приращения даты.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Возвращает список значений <code>datetime</code> размера <code>count</code>, начиная с <code>start</code>. Данное значение приращения <code>step</code> является значением <code>duration</code>, которое добавляется к каждому значению.


## Examples

### Example #1 
Создать список из 10 значений, начиная за 5 минут до наступления Нового года (#datetime(2011, 12, 31, 23, 55, 0)) с увеличением на 1 минуту (#duration(0, 0, 1, 0)).
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
