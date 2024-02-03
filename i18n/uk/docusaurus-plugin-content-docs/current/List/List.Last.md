---
title: List.Last
---

# List.Last


## Description

Повертає останнє значення у списку або вказане за замовчуванням, якщо список пустий.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Повертає останній елемент списку <code>list</code> або додаткове значення за замовчуванням, <code>defaultValue</code>, якщо список пустий.    Якщо список пустий і значення за замовчуванням не вказане, функція повертає <code>null</code>.


## Examples

### Example #1 
Знайти останнє значення у списку \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Знайти останнє значення у списку \{} або повернути -1, якщо список пустий.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
