---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Pateikiama Teisinga, jei bet kuri reikšmė patenkina sąlygos funkciją.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Pateikiama <code>true</code>, jei sąlygos funkciją, <code>condition</code>, patenkina visos sąrašo reikšmės <code>list</code>, kitu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar visos sąrašo reikšmės \{9, 10, 11} didesnės nei 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Nustatykite, ar visos sąrašo reikšmės \{1, 2, 3} didesnės nei 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
