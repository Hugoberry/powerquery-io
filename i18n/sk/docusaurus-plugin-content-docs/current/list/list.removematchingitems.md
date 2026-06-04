---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Odstráni všetky výskyty vstupných hodnôt.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Odstráni všetky výskyty daných hodnôt v zozname `list2` zo zoznamu `list1`. Ak hodnoty v zozname `list2` neexistujú v zozname `list1`, vráti sa pôvodný zoznam. Možno zadať voliteľnú hodnotu kritérií rovnosti `equationCriteria` na kontrolu testovania rovnosti.


## Examples

### Example #1
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5, 5\} bez zoznamu \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
