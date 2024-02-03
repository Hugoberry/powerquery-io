---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Вказує, чи список містить будь-яке значення з іншого списку.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Вказує, чи список <code>list</code> містить будь-яке значення з іншого списку, <code>values</code>.        Повертає значення true, якщо значення знайдено у списку, у протилежному випадку повертає значення false. Можна вказати додаткове значення критеріїв рівняння, <code>equationCriteria</code>, для керування перевіркою на рівність. 


## Examples

### Example #1 
Визначити, чи список \{1, 2, 3, 4, 5} містить 3 або 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи список \{1, 2, 3, 4, 5} містить 6 або 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
