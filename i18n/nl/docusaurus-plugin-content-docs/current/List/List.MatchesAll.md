---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Retourneert &#39;true&#39; als er door alle waarden uit de lijst wordt voldaan aan de voorwaardefunctie.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Retourneert <code>true</code> als er door alle waarden uit de lijst <code>list</code> wordt voldaan aan de voorwaardefunctie, <code>condition</code>, of retourneert <code>false</code> als dat niet het geval is.


## Examples

### Example #1 
Bepalen of alle waarden in de lijst \{11, 12, 13} groter zijn dan 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Bepalen of alle waarden in de lijst \{1, 2, 3} groter zijn dan 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
