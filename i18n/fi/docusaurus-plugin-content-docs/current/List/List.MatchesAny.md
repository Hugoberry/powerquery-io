---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Palauttaa arvon true, jos mikä tahansa arvo täyttää ehtofunktion ehdot.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Palauttaa arvon <code>true</code>, jos mikä tahansa luettelon <code>list</code> arvo täyttää ehtofunktion <code>condition</code> ehdot. Palauttaa muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Selvitä, onko jokin luettelon \{9, 10, 11} arvoista suurempi kuin 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, onko jokin luettelon \{1, 2, 3} arvoista suurempi kuin 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
