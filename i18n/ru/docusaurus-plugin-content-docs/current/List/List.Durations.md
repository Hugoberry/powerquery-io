---
title: List.Durations
---

# List.Durations


Создает список значений длительности для заданного исходного значения, количества и значения возрастания длительности.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Возвращает список значений <code>count</code> <code>duration</code>, начиная с <code>start</code>, с добавлением заданного значения <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Создать список из пяти значений, начиная с первого часа, с добавлением одного часа.
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
