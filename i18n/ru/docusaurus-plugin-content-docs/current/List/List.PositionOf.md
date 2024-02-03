---
title: List.PositionOf
---

# List.PositionOf


## Description

Возвращает смещение значения в списке.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Возвращает смещение, на котором значение <code>value</code> появляется в списке <code>list</code>. Возвращает –1, если значение не найдено.    Можно указать необязательный параметр вхождения <code>occurrence</code>.<ul>   <li><code>occurrence</code>: максимальное количество вхождений, которые могут быть возвращены.</li></ul>


## Examples

### Example #1 
Найти позицию в списке \{1, 2, 3}, в которой появляется значение 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
