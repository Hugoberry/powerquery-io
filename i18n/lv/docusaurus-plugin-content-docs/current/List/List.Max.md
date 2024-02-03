---
title: List.Max
---

# List.Max


## Description

Tiek atgriezta maksimālā vērtība vai noklusējuma vērtība, ja saraksts ir tukšs.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Atgriež saraksta <code>list</code> maksimālo vērtību vai papildu noklusējuma vērtību <code>default</code>, ja saraksts ir tukšs.    Varat norādīt papildu comparisonCriteria vērtību <code>comparisonCriteria</code>, lai noteiktu saraksta vienumu salīdzināšanas veidu. Ja šī parametra vērtība ir Null, tiek lietota noklusējuma salīdzināšana.


## Examples

### Example #1 
Iegūstiet saraksta \{1, 4, 7, 3, -2, 5} maksimālo vērtību.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Iegūstiet saraksta \{} maksimālo vērtību. Ja saraksts ir tukšs, tiek atgriezta vērtība -1. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
