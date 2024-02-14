---
title: List.Min
---

# List.Min


Возвращает минимальное значение или значение по умолчанию для пустого списка.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Возвращает минимальный элемент в списке <code>list</code> или необязательное значение по умолчанию <code>default</code>, если список пуст.    Может быть указано необязательное значение comparisonCriteria, <code>comparisonCriteria</code>, определяющее, как сравнивать элементы списка. Если этот параметр имеет значение NULL, используется функция сравнения по умолчанию.


## Examples

### Example #1 
Найти минимальное значение в списке \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Найти минимум в списке \{} или получить -1, если список пуст. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
