---
title: List.Contains
---

# List.Contains


## Description

Вказує, чи список містить значення.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Визначає, чи список <code>list</code> містить значення <code>value</code>.    Якщо значення знайдено в списку, повертає значення "Істина", в іншому разі – значення "Хибність". Можна вказати додаткове значення умов рівняння (<code>equationCriteria</code>), щоб керувати перевіркою на рівність. 


## Examples

### Example #1 
Визначити, чи список \{1, 2, 3, 4, 5} містить 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи список \{1, 2, 3, 4, 5} містить 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
