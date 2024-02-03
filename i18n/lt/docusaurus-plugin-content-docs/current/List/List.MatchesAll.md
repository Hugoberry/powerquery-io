---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Pateikiama Teisinga, jei visos sąrašo reikšmės patenkina sąlygos funkciją.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Pateikiama <code>true</code>, jei sąlygos funkciją, <code>condition</code>, patenkina visos sąrašo reikšmės <code>list</code>, kitu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar visos sąrašo reikšmės \{11, 12, 13} yra didesnės nei 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Nustatykite, ar visos sąrašo reikšmės \{1, 2, 3} yra didesnės nei 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
