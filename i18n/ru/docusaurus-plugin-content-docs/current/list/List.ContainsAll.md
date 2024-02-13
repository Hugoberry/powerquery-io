---
title: List.ContainsAll
---

# List.ContainsAll


Указывает, содержит ли список все значения из другого списка.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, содержит ли список <code>list</code> все значения из другого списка <code>values</code>.    Возвращает значение true, если значение найдено в списке, и значение false в противном случае. Необязательное значение критерия уравнения <code>equationCriteria</code> можно указать для управления проверкой на равенство. 


## Examples

### Example #1 
Определить, содержит ли список \{1, 2, 3, 4, 5} значения 3 и 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Определить, содержит ли список \{1, 2, 3, 4, 5} значения 5 и 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
