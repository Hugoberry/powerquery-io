---
title: List.Average
---

# List.Average


## Description

Повертає середнє значення. Працює зі значеннями числа, дати, дати й часу, дати й часу з часовим поясом і тривалості.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Повертає середнє значення для елементів у списку, <code>list</code>. Результат видається в тому ж типі даних, що й значення у списку. Працює тільки зі значеннями числа, дати, часу, дати й часу, дати й часу з часовим поясом і тривалості.    Якщо список пустий, повертається Null-значення.


## Examples

### Example #1 
Знайти середнє значення списку чисел, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Знайти середнє значення дат 1 січня 2011 р., 2 січня 2011 р. і 3 січня 2011 р.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
