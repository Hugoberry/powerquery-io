---
title: List.RemoveItems
---

# List.RemoveItems


No pirmā saraksta tiek noņemti visi vienumi, kas ir ietverti otrajā sarakstā.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

No saraksta `list1` tiek noņemti visi sarakstā `list2` norādīto vērtību gadījumi. Ja sarakstā `list1` nav ietvertas saraksta `list2` vērtības, tiek atgriezts sākotnējais saraksts.


## Examples

### Example #1
Noņemiet no saraksta \{1, 2, 3, 4, 2, 5, 5\} sarakstā \{2, 4, 6\} ietvertos vienumus.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
