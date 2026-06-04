---
title: List.Contains
---

# List.Contains


Indicates whether the list contains the value.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indicates whether the list contains the specified value. Returns `true` if the value is found in the list, `false` otherwise.

-   `list`: The list to search.
-   `value`: The value to search for in the list.
-   `equationCriteria`: (Optional) The comparer used to determine if two values are equal.


## Examples

### Example #1
Determine if the list \{1, 2, 3, 4, 5\} contains 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Determine if the list \{1, 2, 3, 4, 5\} contains 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Ignoring case, determine if the list contains "rhubarb".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Determine if the list contains the date April 8, 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions

import Partial_List_Contains from './_list.contains.mdx'

<Partial_List_Contains />
