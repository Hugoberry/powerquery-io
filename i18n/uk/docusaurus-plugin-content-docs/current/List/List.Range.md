---
title: List.Range
---

# List.Range


## Description

Повертає підмножину списку, починаючи зі зсуву.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Повертає підмножину списку, починаючи зі зсуву <code>list</code>. Додатковий параметр, <code>offset</code>, задає максимальну кількість елементів у підмножині.


## Examples

### Example #1 
Знайти підмножину, починаючи зі зсуву 6, списку чисел від 1 до 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Знайти підмножину довжиною 2, починаючи зі зсуву 6, списку чисел від 1 до 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
