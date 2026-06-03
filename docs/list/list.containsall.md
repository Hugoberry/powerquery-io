---
title: List.ContainsAll
---

# List.ContainsAll


Indicates where a list includes all the values in another list.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indicates whether the list includes all the values from another list. Returns `true` if all the values are found in the list, `false` otherwise.

-   `list`: The list to search.
-   `values`: The list of values to search for in the first list.
-   `equationCriteria`: (Optional) The comparer used to determine if two values are equal.


## Examples

### Example #1
Determine if the list \{1, 2, 3, 4, 5\} contains 3 and 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Determine if the list \{1, 2, 3, 4, 5\} contains 5 and 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determine if the list contains a dog and a horse, while ignoring case.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determine if the list contains the dates April 8, 2022 and July 6, 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
