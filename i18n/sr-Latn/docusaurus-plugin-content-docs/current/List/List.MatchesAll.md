---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Vraća „true“ ako sve vrednosti sa liste zadovolje funkciju uslova.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Vraća <code>true</code> ako sve vrednosti sa liste <code>list</code> zadovolje funkciju uslova, <code>condition</code>. U suprotnom vraća <code>false</code>.


## Examples

### Example #1 
Utvrđivanje da li su sve vrednosti sa liste \{11, 12, 13} veće od 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Utvrđivanje da li su sve vrednosti sa liste \{1, 2, 3} veće od 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
