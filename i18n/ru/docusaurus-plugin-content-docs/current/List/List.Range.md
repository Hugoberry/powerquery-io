---
title: List.Range
---

# List.Range


## Description

Возвращает подмножество списка, начиная со смещения.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Возвращает подмножество списка, начиная со смещения <code>list</code>. Необязательный параметр <code>offset</code> устанавливает максимальное число элементов в подмножестве.


## Examples

### Example #1 
Найти подмножество, начиная со смещения 6, в списке чисел от 1 до 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Найти подмножество с количеством элементов 2, начиная со смещения 6, в списке чисел от 1 до 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
