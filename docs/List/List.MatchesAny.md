---
title: List.MatchesAny
---

# List.MatchesAny


Returns true if the condition function is satisfied by any value.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Returns <code>true</code> if the condition function, <code>condition</code>, is satisfied by any of values in the list <code>list</code>, otherwise returns <code>false</code>.


## Examples

### Example #1 
Find if any of the values in the list \{9, 10, 11} are greater than 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Find if any of the values in the list \{1, 2, 3} are greater than 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
