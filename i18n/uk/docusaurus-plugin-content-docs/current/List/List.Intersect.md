---
title: List.Intersect
---

# List.Intersect


## Description

Повертає перетин значень списку, знайдених у вхідних даних.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Повертає перетин значень, знайдених у вхідному списку <code>lists</code>. Можна вказати додатковий параметр <code>equationCriteria</code>.


## Examples

### Example #1 
Знайти перетин списків \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
