---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Returnerar true om alla värden i listan uppfyller condition-funktionen.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Returnerar <code>true</code> om alla värden i listan <code>list</code> uppfyller condition-funktionen, <code>condition</code>. Annars returneras <code>false</code>.


## Examples

### Example #1 
Kontrollera om alla värden i listan \{11, 12, 13} är större än 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om alla värden i listan \{1, 2, 3} är större än 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
