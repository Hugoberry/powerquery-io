---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Vráti hodnotu True, ak funkciu podmienky spĺňajú všetky hodnoty v zozname.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Vráti hodnotu <code>true</code>, ak funkciu podmienky <code>condition</code> spĺňajú všetky hodnoty v zozname <code>list</code>, v opačnom prípade vráti hodnotu <code>false</code>.


## Examples

### Example #1 
Určte, či všetky hodnoty v zozname \{11, 12, 13} sú väčšie ako 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Určte, či všetky hodnoty v zozname \{1, 2, 3} sú väčšie ako 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
