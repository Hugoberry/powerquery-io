---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Palauttaa arvon true, jos kaikki luettelon arvot täyttävät ehtofunktion ehdot.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Palauttaa arvon <code>true</code>, jos kaikki luettelon <code>list</code> arvot täyttävät ehtofunktion <code>condition</code> ehdot. Palauttaa muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Selvitä, ovatko luettelon \{11, 12, 13} kaikki arvot suurempia kuin 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, ovatko luettelon \{1, 2, 3} kaikki arvot suurempia kuin 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
