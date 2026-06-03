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

Returns `true` if the condition function is satisfied by any of the values in the list, otherwise returns `false`.

-   `list`: The list containing the values to check.
-   `condition`: The condition to check against the values in the list.


## Examples

### Example #1
Determine if any of the values in the list \{9, 10, 11\} are greater than 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determine if any of the values in the list \{1, 2, 3\} are greater than 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determine if any of the text values in the list contain "cat" while ignoring case.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Determine if any of the dates contain the year 2021.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
