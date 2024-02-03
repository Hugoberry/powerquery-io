---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Returnerar true om något av värdena uppfyller condition-funktionen.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Returnerar <code>true</code> om något av värdena i listan <code>list</code> uppfyller condition-funktionen, <code>condition</code>. Annars returneras <code>false</code>.


## Examples

### Example #1 
Kontrollera om något av värdena i listan \{9, 10, 11} är större än 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om något av värdena i listan \{1, 2, 3} är större än 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
