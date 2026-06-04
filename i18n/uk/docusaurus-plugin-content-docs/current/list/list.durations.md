---
title: List.Durations
---

# List.Durations


Створює список значень тривалості із заданими початковим значенням, кількістю значень та значенням приросту тривалості.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Повертає список значень `count` `duration`, починаючи з `start` і з приростом на задану `duration` `step`.


## Examples

### Example #1
Створити список із 5 значень, починаючи з 1 години, з приростом на годину.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
