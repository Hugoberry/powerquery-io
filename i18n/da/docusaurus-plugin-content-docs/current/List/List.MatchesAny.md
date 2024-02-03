---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Returnerer true, hvis betingelsesfunktionen er tilfreds med en hvilken som helst værdi.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Returnerer <code>true</code>, hvis betingelsesfunktionen <code>condition</code> er tilfreds med en hvilken som helst værdi på listen <code>list</code>. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Find ud af, om nogen af værdierne på listen \{9, 10, 11} er større end 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om nogen af værdierne på listen \{1, 2, 3} er større end 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
