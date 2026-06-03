---
title: List.Max
---

# List.Max


Returns the maximum value or the default value for an empty list.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Returns the maximum item in the list or the optional default value if the list is empty.

-   `list`: The list of values.
-   `default`: (Optional) The value to return if the list is empty.
-   `comparisonCriteria`: (Optional) A function that's used to transform the values before they're compared. If this parameter is `null`, then the values are compared without any transformation.
-   `includeNulls`: (Optional) Indicates whether `null` values in the list should be included in determining the maximum item. The default value is `true`.


## Examples

### Example #1
Find the maximum value in the specified list.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Find the maximum value in the specified list or return -1 if it's empty.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Find the item in a list of text values that's last alphabetically. If the list is empty, return "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Find the most recent date from a list of German dates. If the list is empty, return January 1, 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
