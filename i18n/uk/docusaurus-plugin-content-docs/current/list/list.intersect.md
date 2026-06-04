---
title: List.Intersect
---

# List.Intersect


Повертає перетин значень списку, знайдених у вхідних даних.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Повертає перетин значень, знайдених у вхідному списку `lists`. Можна вказати додатковий параметр `equationCriteria`.


## Examples

### Example #1
Знайти перетин списків \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
