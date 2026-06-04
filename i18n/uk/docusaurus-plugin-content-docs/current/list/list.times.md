---
title: List.Times
---

# List.Times


Створює список значень time із заданими початковим значенням, кількістю значень та значенням приросту тривалості.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Повертає список значень `time` за розміром `count`, починаючи з `start`. Заданий приріст, `step`, – це значення `duration`, яке додається до кожного значення.


## Examples

### Example #1
Створити список з 4 значень, починаючи з полудня (#time(12, 0, 0)) і з приростом на 1 годину (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
