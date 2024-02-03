---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Вказує, чи список містить усі значення в іншому списку.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Вказує, чи список <code>list</code> містить усі значення в іншому списку, <code>values</code>.    Повертає значення true, якщо значення знайдено у списку, у протилежному випадку повертає значення false. Можна вказати додаткове значення критеріїв рівняння, <code>equationCriteria</code>, для керування перевіркою на рівність. 


## Examples

### Example #1 
Визначити, чи список \{1, 2, 3, 4, 5} містить 3 і 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи список \{1, 2, 3, 4, 5} містить 5 і 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
