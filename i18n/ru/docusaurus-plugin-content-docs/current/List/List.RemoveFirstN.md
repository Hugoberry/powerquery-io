---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Возвращает список, который пропускает указанное число элементов в начале списка.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Возвращает список, который удаляет первый элемент списка <code>list</code>. Если список <code>list</code> пуст, возвращается пустой список.Эта функция принимает необязательный параметр <code>countOrCondition</code> для поддержки удаления нескольких значений, как указано ниже. <ul> <li>Если указано число, будет удалено количество элементов до указанного значения. </li> <li>Если указано условие, возвращаемый список будет начинаться с первого элемента в <code>list</code>, удовлетворяющего условию. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются. </li> <li>Если параметр имеет значение NULL, наблюдается поведение по умолчанию. </li> </ul>


## Examples

### Example #1 
Создать список из \{1, 2, 3, 4, 5} без первых 3 цифр.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Создать список из \{5, 4, 2, 6, 1}, который начинается с числа меньше 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
