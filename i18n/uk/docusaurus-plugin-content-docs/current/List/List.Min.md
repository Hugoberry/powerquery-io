---
title: List.Min
---

# List.Min


## Description

Повертає мінімальне значення або значення за замовчуванням для пустого списку.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Повертає мінімальний елемент списку <code>list</code> або додаткове стандартне значення <code>default</code>, якщо список пустий.    Можна вказати додаткове значення comparisonCriteria <code>comparisonCriteria</code>, щоб визначити, як порівнювати елементи в списку. Якщо цей параметр має Null-значення, використовується стандартний засіб порівняння.


## Examples

### Example #1 
Знайти мінімальне значення у списку \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Знайти мінімальне значення у списку \{} або повернути -1, якщо список пустий. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
