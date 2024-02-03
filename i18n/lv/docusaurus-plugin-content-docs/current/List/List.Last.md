---
title: List.Last
---

# List.Last


## Description

Tiek atgriezta saraksta pēdējā vērtība vai norādītā noklusējuma vērtība, ja saraksts ir tukšs.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Tiek atgriezts saraksta <code>list</code> pēdējais vienums vai papildu noklusējuma vērtība <code>defaultValue</code>, ja saraksts ir tukšs.    Ja saraksts ir tukšs un nav norādīta noklusējuma vērtība, funkcija atgriež vērtību <code>Null</code>.


## Examples

### Example #1 
Iegūstiet saraksta \{1, 2, 3} pēdējo vērtību.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Iegūstiet saraksta \{} pēdējo vērtību. Ja saraksts ir tukšs, tiek atgriezta vērtība -1.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
