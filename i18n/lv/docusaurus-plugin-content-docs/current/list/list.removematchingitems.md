---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Tiek noņemti visi ievades vērtību gadījumi.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

No saraksta `list1` tiek noņemti visi sarakstā `list2` norādīto vērtību gadījumi. Ja sarakstā `list1` nav ietvertas saraksta `list2` vērtības, tiek atgriezts sākotnējais saraksts. Varat norādīt papildu vienādojuma kritērija vērtību `equationCriteria`, lai kontrolētu vienādības pārbaudi.


## Examples

### Example #1
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5, 5\}, neietverot sarakstu \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
