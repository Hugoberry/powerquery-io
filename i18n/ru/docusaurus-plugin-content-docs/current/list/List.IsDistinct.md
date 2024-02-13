---
title: List.IsDistinct
---

# List.IsDistinct


Указывает, имеются ли повторяющиеся значения в списке.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Возвращает логическое значение, указывающее, имеются ли повторяющиеся значения в списке <code>list</code>; <code>true</code>, если значения в списке уникальны; <code>false</code>, если есть повторяющиеся значения. 


## Examples

### Example #1 
Определяет, уникальны ли значения списка \{1, 2, 3} (т. е. отсутствуют ли в нем повторяющиеся значения).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Определяет, уникальны ли значения списка \{1, 2, 3, 3} (т. е. отсутствуют ли в нем повторяющиеся значения).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
