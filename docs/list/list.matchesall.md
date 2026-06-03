---
title: List.MatchesAll
---

# List.MatchesAll


Returns true if the condition function is satisfied by all values in the list.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Returns `true` if the condition function is satisfied by all values in the list, otherwise returns `false`.

-   `list`: The list containing the values to check.
-   `condition`: The condition to check against the values in the list.


## Examples

### Example #1
Determine if all the values in the list \{11, 12, 13\} are greater than 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determine if all the values in the list \{1, 2, 3\} are greater than 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determine if all the text values in the list contain "anna" while ignoring case.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Determine if all the dates contain the year 2021.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
