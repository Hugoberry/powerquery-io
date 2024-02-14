---
title: List.MatchesAny
---

# List.MatchesAny


Retourneert &#39;true&#39; als er door een willekeurige waarde wordt voldaan aan de voorwaardefunctie.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Retourneert <code>true</code> als er door een van de waarden uit de lijst <code>list</code> wordt voldaan aan de voorwaardefunctie, <code>condition</code>, of retourneert <code>false</code> als dat niet het geval is.


## Examples

### Example #1 
Uitzoeken of een van de waarden in de lijst \{9, 10, 11} groter is dan 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of een van waarden in de lijst \{1, 2, 3} groter is dan 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
