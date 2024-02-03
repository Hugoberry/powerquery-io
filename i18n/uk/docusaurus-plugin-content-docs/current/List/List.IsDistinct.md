---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Вказує, чи список містить повтори.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Повертає логічне значення, чи список <code>list</code> містить повтори; <code>true</code> – якщо список містить тільки унікальні значення, <code>false</code> – якщо список містить повтори. 


## Examples

### Example #1 
Визначити, чи список \{1, 2, 3} містить тільки унікальні значення (тобто не містить повторів).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи список \{1, 2, 3, 3} містить тільки унікальні значення (тобто не містить повторів).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
