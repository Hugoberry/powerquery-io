---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Возвращает список, который пропускает указанное число элементов в начале списка.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Возвращает список, который удаляет первый элемент списка `list`. Если `list` — пустой список, возвращается пустой список. Эта функция принимает необязательный параметр, `countOrCondition`, для поддержки удаления нескольких значений, как указано ниже.

-   Если указано число, будет удалено максимальное количество элементов.
-   Если указано условие, все последовательные совпадающие элементы в начале `list` удаляются.
-   Если этот параметр имеет значение NULL, наблюдается поведение по умолчанию.


## Examples

### Example #1
Создать список из \{1, 2, 3, 4, 5\} без первых 3 цифр.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Создать список из \{5, 4, 2, 6, 1\}, который начинается с числа меньше 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
