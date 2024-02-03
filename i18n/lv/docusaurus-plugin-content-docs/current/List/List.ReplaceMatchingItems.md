---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Tiek veikti visi pāra \{ old, new } aizvietojumi.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Sarakstā <code>list</code> tiek veikti norādītie aizvietojumi. Aizstāšanas operācijā <code>replacements</code> ir ietverts saraksts, kurā ir divas vērtības — vecā vērtība un jaunā vērtība.    Varat norādīt papildu vienādojuma kritērija vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi.


## Examples

### Example #1 
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5}, aizstājot vērtību 5 ar vērtību -5 un vērtību 1 ar vērtību -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
