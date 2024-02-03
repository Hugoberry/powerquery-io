---
title: List.Min
---

# List.Min


## Description

Tiek atgriezta minimālā vērtība vai noklusējuma vērtība, ja saraksts ir tukšs.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Atgriež saraksta <code>list</code> minimālo vērtību vai papildu noklusējuma vērtību <code>default</code>, ja saraksts ir tukšs.    Varat norādīt papildu comparisonCriteria vērtību <code>comparisonCriteria</code>, lai noteiktu saraksta vienumu salīdzināšanas veidu. Ja šī parametra vērtība ir Null, tiek lietota noklusējuma salīdzināšana.


## Examples

### Example #1 
Iegūstiet saraksta \{1, 4, 7, 3, -2, 5} minimālo vērtību.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Iegūstiet saraksta \{} minimālo vērtību. Ja saraksts ir tukšs, tiek atgriezta vērtība -1. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
