---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Returns true if the condition function is satisfied by all values in the list.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Returns <code>true</code> if the condition function, <code>condition</code>, is satisfied by all values in the list <code>list</code>, otherwise returns <code>false</code>.


## Examples

### Example #1 
Determine if all the values in the list \{11, 12, 13} are greater than 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determine if all the values in the list \{1, 2, 3} are greater than 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
