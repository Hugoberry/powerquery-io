---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Tiek atgriezta vērtība True, ja kāda no vērtībām atbilst nosacījuma funkcijai.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Tiek atgriezta vērtība <code>true</code>, ja kāda no saraksta <code>list</code> vērtībām atbilst nosacījuma funkcijai <code>condition</code>, pretējā gadījumā tiek atgriezta vērtība <code>false</code>.


## Examples

### Example #1 
Uzziniet, vai kāda no saraksta \{9, 10, 11} vērtībām ir lielāka par 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai kāda no saraksta \{1, 2, 3} vērtībām ir lielāka par 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
