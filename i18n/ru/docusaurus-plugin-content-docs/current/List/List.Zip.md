---
title: List.Zip
---

# List.Zip


## Description

Возвращает список списков, объединяя элементы, стоящие на одной позиции в разных списках.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Принимает список списков, <code>lists</code> и возвращает список списков, объединяя элементы на одной позиции.


## Examples

### Example #1 
Пакует два простых списка \{1, 2} и \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Пакует два простых списка разной длины \{1, 2} и \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
