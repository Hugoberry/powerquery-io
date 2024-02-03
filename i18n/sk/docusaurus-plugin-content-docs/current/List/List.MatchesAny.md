---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Vráti hodnotu True, ak funkciu podmienky spĺňa ľubovoľná hodnota.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Vráti hodnotu <code>true</code>, ak funkciu podmienky <code>condition</code> spĺňa ľubovoľná z hodnôt v zozname <code>list</code>, v opačnom prípade vráti hodnotu <code>false</code>.


## Examples

### Example #1 
Zistite, či niektorá z hodnôt v zozname \{9, 10, 11} je väčšia ako 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Zistite, či niektorá z hodnôt v zozname \{1, 2, 3} je väčšia ako 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
