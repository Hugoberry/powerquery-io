---
title: List.ContainsAny
---

# List.ContainsAny


Указывает, содержит ли список какие-либо значения из другого списка.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, содержит ли список <code>list</code> какие-либо значения из другого списка <code>values</code>.        Возвращает значение true, если значение найдено в списке, и значение false в противном случае. Необязательное значение критерия уравнения <code>equationCriteria</code> можно указать для управления проверкой на равенство. 


## Examples

### Example #1 
Определить, содержит список \{1, 2, 3, 4, 5} значение 3 или 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Определить, содержит список \{1, 2, 3, 4, 5} значение 6 или 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
