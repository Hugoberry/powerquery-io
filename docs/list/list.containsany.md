---
title: List.ContainsAny
---

# List.ContainsAny


Indicates where a list includes any of the values in another list.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indicates whether the list contains any of the values from another list. Returns `true` if the values are found in the list, `false` otherwise.

-   `list`: The list to search.
-   `values`: The list of values to search for in the first list.
-   `equationCriteria`: (Optional) The comparer used to determine if two values are equal.


## Examples

### Example #1
Determine if the list \{1, 2, 3, 4, 5\} contains 3 or 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Determine if the list \{1, 2, 3, 4, 5\} contains 6 or 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determine if the list contains a horse or an owl, while ignoring case.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determine if the list contains a date of either April 8, 2022 or January 12, 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
