---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Returnează true dacă funcţia de condiţionare este îndeplinită de toate valorile din listă.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Returnează <code>true</code> dacă funcţia de condiţionare, <code>condition</code>, este îndeplinită de toate valorile din lista <code>list</code>; în caz contrar, returnează <code>false</code>.


## Examples

### Example #1 
Determinaţi dacă toate valorile din lista \{11, 12, 13} sunt mai mari decât 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determinaţi dacă toate valorile din lista \{1, 2, 3} sunt mai mari decât 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
