---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Vrátí hodnotu True, pokud funkci podmínky splňuje jakákoliv hodnota v seznamu.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Vrátí hodnotu <code>true</code>, pokud funkci podmínky <code>condition</code> splňuje jakákoliv hodnota v seznamu <code>list</code>, jinak vrátí hodnotu <code>false</code>.


## Examples

### Example #1 
Zjistí, zda je jakákoliv hodnota v seznamu \{9, 10, 11} větší než 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda je jakákoliv hodnota v seznamu \{1, 2, 3} větší než 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
