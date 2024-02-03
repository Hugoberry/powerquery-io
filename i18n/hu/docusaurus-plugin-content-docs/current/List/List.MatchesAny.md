---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Igazat ad vissza, ha bármely érték kielégíti a feltételfüggvényt.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

<code>true</code> értéket ad vissza, ha a(z) <code>condition</code> feltételfüggvényt a(z) <code>list</code> lista bármely értéke kielégíti; egyéb esetben <code>false</code> értéket ad vissza.


## Examples

### Example #1 
Annak eldöntése, hogy a \{9, 10, 11} lista bármely eleme nagyobb-e 10-nél
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Annak eldöntése, hogy az \{1, 2, 3} lista bármely eleme nagyobb-e 10-nél
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
