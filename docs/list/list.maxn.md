---
title: List.MaxN
---

# List.MaxN


Returns the maximum value(s) in the list. The number of values to return or a filter condition must be specified.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Returns the maximum value(s) in the specified list. After the rows are sorted, optional parameters can be specified to further filter the result.

-   `list`: The list of values.
-   `countOrCondition`: Specifies the number of values to return or a filter condition. If a number is specified, a list of up to `countOrCondition` items in descending order is returned. If a condition is specified, the returned list includes all items that meet the condition.
-   `comparisonCriteria`: (Optional) A function that's used to transform the values before they're compared. If this parameter is `null`, then the values are compared without any transformation.
-   `includeNulls`: (Optional) Indicates whether `null` values in the list should be included in determining the maximum item. The default value is `true`.


## Examples

### Example #1
Find the top 5 values in the specified list.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Find the words with more than 3 characters.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Find the three most recent dates from a list of German dates.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
