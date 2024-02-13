---
title: List.Last
---

# List.Last


Возвращает последнее значение списка или указанное значение по умолчанию, если список пуст.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Возвращает последний элемент в списке <code>list</code> или необязательное значение по умолчанию <code>defaultValue</code>, если список пуст.    Если список пуст, а значение по умолчанию не указано, функция возвращает значение <code>null</code>.


## Examples

### Example #1 
Найти последнее значение в списке \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Найти последнее значение в списке \{} или получить -1, если он пуст.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
