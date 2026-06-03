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

Возвращает последний элемент в указанном списке или необязательное значение по умолчанию, если список пуст.

-   `list`: список для проверки.
-   `defaultValue`: (необязательно) значение по умолчанию, которое возвращается, если список пуст. Если список пуст, а значение по умолчанию не указано, функция возвращает `null`.


## Examples

### Example #1
Найти последнее значение в списке \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Найти последнее значение в списке \{\} или получить -1, если он пуст.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
