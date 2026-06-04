---
title: List.First
---

# List.First


Повертає перше значення зі списку або вказане за замовчуванням, якщо список пустий.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Повертає перший елемент у списку `list` або додаткове значення за замовчуванням, `defaultValue`, якщо список пустий. Якщо список пустий і значення за замовчуванням не вказане, функція повертає `null`.


## Examples

### Example #1
Знайти перше значення у списку \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Знайти перше значення у списку \{\}. Якщо список пустий, повернути -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
