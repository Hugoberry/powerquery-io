---
title: List.Max
---

# List.Max


Возвращает максимальное значение или значение по умолчанию для пустого списка.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Возвращает максимальный элемент в списке <code>list</code> или необязательное значение по умолчанию <code>default</code>, если список пуст.    Может быть указано необязательное значение comparisonCriteria, <code>comparisonCriteria</code>, определяющее, как сравнивать элементы списка. Если этот параметр имеет значение NULL, используется функция сравнения по умолчанию.


## Examples

### Example #1 
Найти максимальное значение в списке \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Найти максимум в списке \{} или получить -1, если список пуст. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
