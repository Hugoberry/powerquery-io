---
title: List.Single
---

# List.Single


## Description

Tiek atgriezts saraksta vienums, ja sarakstā ir tikai viens vienums, pretējā gadījumā tiek aktivizēts izņēmums.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Ja sarakstā <code>list</code> ir tikai viens vienums, tiek atgriezts šis vienums.    Ja sarakstā ir vairāki vienumi vai tas ir tukšs, funkcija aktivizē izņēmumu.


## Examples

### Example #1 
Iegūstiet saraksta \{1} vienīgo vērtību.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Iegūstiet saraksta \{1, 2, 3} vienīgo vērtību.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
