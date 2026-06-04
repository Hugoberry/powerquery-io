---
title: List.ReplaceRange
---

# List.ReplaceRange


Lecserél megadott számú értéket egy pozíciótól kezdődően a megadott csereértékekre.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Lecserél `count` értéket a(z) `list` listán a(z) `replaceWith` elemeire a megadott `index` pozíciótól kezdődően.


## Examples

### Example #1
A \{7, 8, 9\} lista lecserélése az \{1, 2, 7, 8, 9, 5\} listán a \{3, 4\} listára
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
