---
title: List.First
---

# List.First


## Description

Tiek atgriezta saraksta pirmā vērtība vai norādītā noklusējuma vērtība, ja saraksts ir tukšs.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Tiek atgriezts saraksta <code>list</code> pirmais vienums vai papildu noklusējuma vērtība <code>defaultValue</code>, ja saraksts ir tukšs.    Ja saraksts ir tukšs un nav norādīta noklusējuma vērtība, funkcija atgriež vērtību <code>Null</code>.


## Examples

### Example #1 
Iegūstiet saraksta \{1, 2, 3} pirmo vērtību.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Iegūstiet saraksta \{} pirmo vērtību. Ja saraksts ir tukšs, tiek atgriezta vērtība -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
