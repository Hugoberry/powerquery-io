---
title: List.RemoveLastN
---

# List.RemoveLastN


Повертає список, який видаляє вказану кількість елементів із кінця списку.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Повертає список, у якому вилучено кілька останніх елементів (`countOrCondition`) з кінця списку `list`. Якщо кількість елементів у `list` менше `countOrCondition`, повертається пустий список.

-   Якщо вказано певну кількість елементів, вилучається не більше вказаної кількості.
-   Якщо вказано умову, вилучаються всі відповідні послідовні елементи в кінці `list`.
-   Якщо цей параметр має Null-значення, вилучається лише один елемент.


## Examples

### Example #1
Створити список із \{1, 2, 3, 4, 5\} без останніх 3 чисел.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Створити список із \{5, 4, 2, 6, 4\}, який закінчується з числа, меншого 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
