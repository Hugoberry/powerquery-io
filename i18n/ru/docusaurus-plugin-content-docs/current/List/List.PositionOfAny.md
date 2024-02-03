---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Возвращает первое смещение значения в списке.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Возвращает смещение в списке <code>list</code> первого вхождения значения в списке <code>values</code>. Возвращает значение –1, если вхождение не найдено.    Можно указать необязательный параметр вхождения <code>occurrence</code>.<ul>   <li><code>occurrence</code>: максимальное количество вхождений, которые могут быть возвращены.</li></ul>


## Examples

### Example #1 
Найти первую позицию в списке \{1, 2, 3}, в которой появляется значение 2 или 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
