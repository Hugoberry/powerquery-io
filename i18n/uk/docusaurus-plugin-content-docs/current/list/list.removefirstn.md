---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Повертає список, який пропускає вказану кількість елементів на початку списку.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Повертає список, у якому вилучено перший елемент списку `list`. Якщо `list` – пустий список, повертається пустий список. Ця функція приймає необов’язковий параметр, `countOrCondition`, щоб підтримувати вилучення кількох значень, як указано нижче.

-   Якщо вказано певну кількість елементів, вилучається не більше вказаної кількості.
-   Якщо вказано умову, вилучаються всі відповідні послідовні елементи на початку `list`.
-   Якщо цей параметр має Null-значення, спостерігатиметься стандартна поведінка.


## Examples

### Example #1
Створити список із \{1, 2, 3, 4, 5\} без перших трьох чисел.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Створити список із \{5, 4, 2, 6, 1\}, який починається з числа, меншого 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
