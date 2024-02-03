---
title: List.First
---

# List.First


## Description

Повертає перше значення зі списку або вказане за замовчуванням, якщо список пустий.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Повертає перший елемент у списку <code>list</code> або додаткове значення за замовчуванням, <code>defaultValue</code>, якщо список пустий.    Якщо список пустий і значення за замовчуванням не вказане, функція повертає <code>null</code>.


## Examples

### Example #1 
Знайти перше значення у списку \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Знайти перше значення у списку \{}. Якщо список пустий, повернути -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
