---
title: List.First
---

# List.First


Возвращает первое значение списка или указанное значение по умолчанию, если список пуст.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Возвращает первый элемент в списке <code>list</code> или необязательное значение по умолчанию <code>defaultValue</code>, если список пуст.    Если список пуст, а значение по умолчанию не указано, функция возвращает значение <code>null</code>.


## Examples

### Example #1 
Найти первое значение в списке \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Найти первое значение в списке \{}. Если этот список пуст, возвращается значение -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
