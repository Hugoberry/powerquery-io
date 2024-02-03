---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Returnerer true, hvis betingelsesfunktionen er tilfreds med alle værdier på listen.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Returnerer <code>true</code>, hvis betingelsesfunktionen <code>condition</code> er tilfreds med alle værdier på listen <code>list</code>. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Find ud af, om alle værdierne på listen \{11, 12, 13} er større end 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om alle værdierne på listen \{1, 2, 3} er større end 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
