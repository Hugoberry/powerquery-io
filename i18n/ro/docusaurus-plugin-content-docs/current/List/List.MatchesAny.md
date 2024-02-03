---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Returnează true dacă funcţia de condiţionare este îndeplinită de orice valoare.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Returnează <code>true</code> dacă funcţia de condiţionare, <code>condition</code>, este îndeplinită de oricare dintre valorile din lista <code>list</code>; în caz contrar, returnează <code>false</code>.


## Examples

### Example #1 
Aflaţi dacă oricare dintre valorile din lista \{9, 10, 11} este mai mare decât 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Aflaţi dacă oricare dintre valorile din lista \{1, 2, 3} este mai mare decât 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
