---
title: List.Contains
---

# List.Contains


Указывает, содержит ли список значение.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, содержит ли список <code>list</code> значение <code>value</code>.    Возвращает значение True, если значение найдено в списке, и значение False в противном случае. Можно указать необязательное значение критерия уравнения <code>equationCriteria</code> для управления проверкой на равенство. 


## Examples

### Example #1 
Определить, содержит ли список \{1, 2, 3, 4, 5} значение 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Определить, содержит ли список \{1, 2, 3, 4, 5} значение 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
