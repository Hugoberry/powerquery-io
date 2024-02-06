---
title: List.ReplaceRange
---

# List.ReplaceRange


Vervangt het getelde aantal waarden, te beginnen bij de positie met de vervangende waarden.


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

Vervangt <code>count</code> waarden in de <code>list</code> door de lijst <code>replaceWith</code>, te beginnen bij de opgegeven positie, <code>index</code>.


## Examples

### Example #1 
\{7, 8, 9} in de lijst \{1, 2, 7, 8, 9, 5} vervangen door \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
