---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Tiek atgriezta vērtība True, ja visas saraksta vērtības atbilst nosacījuma funkcijai.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Tiek atgriezta vērtība <code>true</code>, ja visas saraksta <code>list</code> vērtības atbilst nosacījuma funkcijai <code>condition</code>, pretējā gadījumā tiek atgriezta vērtība <code>false</code>.


## Examples

### Example #1 
Nosakiet, vai visas saraksta \{11, 12, 13} vērtības ir lielākas par 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Nosakiet, vai visas saraksta \{1, 2, 3} vērtības ir lielākas par 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
