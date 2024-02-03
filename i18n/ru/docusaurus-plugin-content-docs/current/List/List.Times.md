---
title: List.Times
---

# List.Times


## Description

Формирует список значений time на основе первоначального значения, количества и значения приращения.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Возвращает список значений <code>time</code> с размером <code>count</code>, начиная с <code>start</code>. Данное значение приращения <code>step</code> является значением <code>duration</code>, которое добавляется к каждому значению.


## Examples

### Example #1 
Создать список из 4 значений, начиная с полудня (#time(12, 0, 0)), последовательно увеличивая время на один час (#duration(0, 1, 0, 0)).
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
