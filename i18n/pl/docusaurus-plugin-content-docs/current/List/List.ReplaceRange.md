---
title: List.ReplaceRange
---

# List.ReplaceRange


Zamienia określoną liczbę wartości, zaczynając od określonej pozycji, na wartości zastępcze.


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

Zamienia wartości <code>count</code> na liście <code>list</code> na wartości z listy <code>replaceWith</code>, zaczynając od określonej pozycji <code>index</code>.


## Examples

### Example #1 
Zamień wartości \{7, 8, 9} na liście \{1, 2, 7, 8, 9, 5} na wartości \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
