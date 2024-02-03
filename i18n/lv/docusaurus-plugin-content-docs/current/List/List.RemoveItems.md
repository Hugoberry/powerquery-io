---
title: List.RemoveItems
---

# List.RemoveItems


## Description

No pirmā saraksta tiek noņemti visi vienumi, kas ir ietverti otrajā sarakstā.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

No saraksta <code>list1</code> tiek noņemti visi sarakstā <code>list2</code> norādīto vērtību gadījumi. Ja sarakstā <code>list1</code> nav ietvertas saraksta <code>list2</code> vērtības, tiek atgriezts sākotnējais saraksts.


## Examples

### Example #1 
Noņemiet no saraksta \{1, 2, 3, 4, 2, 5, 5} sarakstā \{2, 4, 6} ietvertos vienumus.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
