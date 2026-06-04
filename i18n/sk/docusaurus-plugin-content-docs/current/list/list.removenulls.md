---
title: List.RemoveNulls
---

# List.RemoveNulls


Odstráni všetky hodnoty null zo zadaného zoznamu.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Odstráni všetky výskyty hodnôt null v zozname `list`. Ak sa v zozname nenachádzajú žiadne hodnoty null, vráti sa pôvodný zoznam.


## Examples

### Example #1
Odstráňte hodnoty null zo zoznamu \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
