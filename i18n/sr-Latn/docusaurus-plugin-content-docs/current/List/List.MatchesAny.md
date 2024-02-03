---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Vraća „true“ ako bilo koja vrednost zadovolji funkciju uslova.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Vraća <code>true</code> ako bilo koja vrednost sa liste <code>list</code> zadovolji funkciju uslova, <code>condition</code>. U suprotnom vraća <code>false</code>.


## Examples

### Example #1 
Pronalaženje da li je bilo koja vrednost sa liste \{9, 10, 11} veća od 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Pronalaženje da li je bilo koja vrednost sa liste \{1, 2, 3} veća od 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
