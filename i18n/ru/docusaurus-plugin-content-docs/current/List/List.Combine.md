---
title: List.Combine
---

# List.Combine


## Description

Возвращает один список, объединяющий несколько списков.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Принимает список списков <code>lists</code> и объединяет их в один новый список.


## Examples

### Example #1 
Объединение двух простых списков \{1, 2} и \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Объединение двух списков \{1, 2} и \{3, \{4, 5}}, один из которых содержит вложенный список.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
