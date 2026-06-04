---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Uporabi vsako zamenjavo v obliki \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Zamenja seznam `list`, kot je navedeno. Postopek zamenjave `replacements` je sestavljen iz seznama dveh vrednosti – stare in nove vrednosti, ki sta podani na seznamu. Določite lahko izbirno vrednost kriterijev enakosti `equationCriteria` za nadzor preskušanja enakosti.


## Examples

### Example #1
Ustvarite seznam iz \{1, 2, 3, 4, 5\} ter zamenjajte vrednost 5 z vrednostjo –5 in vrednost 1 z vrednostjo –1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
