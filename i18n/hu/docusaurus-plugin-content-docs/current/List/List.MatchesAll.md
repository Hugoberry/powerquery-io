---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Igazat ad vissza, ha a lista összes értéke kielégíti a feltételfüggvényt.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

<code>true</code> értéket ad vissza, ha a(z) <code>condition</code> feltételfüggvényt a(z) <code>list</code> lista összes értéke kielégíti; egyéb esetben <code>false</code> értéket ad vissza.


## Examples

### Example #1 
Annak eldöntése, hogy a \{11, 12, 13} lista összes értéke nagyobb-e 10-nél
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Annak eldöntése, hogy az \{1, 2, 3} lista összes értéke nagyobb-e 10-nél
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
