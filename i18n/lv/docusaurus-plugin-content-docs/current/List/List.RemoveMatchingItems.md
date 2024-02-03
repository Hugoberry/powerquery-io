---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Tiek noņemti visi ievades vērtību gadījumi.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

No saraksta <code>list1</code> tiek noņemti visi sarakstā <code>list2</code> norādīto vērtību gadījumi. Ja sarakstā <code>list1</code> nav ietvertas saraksta <code>list2</code> vērtības, tiek atgriezts sākotnējais saraksts.    Varat norādīt papildu vienādojuma kritērija vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5, 5}, neietverot sarakstu \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
