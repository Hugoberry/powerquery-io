---
title: List.MinN
---

# List.MinN


Επιστρέφει τις ελάχιστες τιμές στη λίστα. Μπορεί να καθοριστεί ο αριθμός των τιμών που θα επιστραφούν ή μια συνθήκη φιλτραρίσματος.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Returns the minimum value(s) in the list, `list`. The parameter, `countOrCondition`, specifies the number of values to return or a filtering condition. The optional parameter, `comparisonCriteria`, specifies how to compare values in the list.

-   `list`: The list of values.
-   `countOrCondition`: If a number is specified, a list of up to `countOrCondition` items in ascending order is returned. If a condition is specified, a list of items that initially meet the condition is returned. Once an item fails the condition, no further items are considered. If this parameter is null, the single smallest value in the list is returned.
-   `comparisonCriteria`: *(Optional)* An optional `comparisonCriteria` value can be specified to determine how to compare the items in the list. If this parameter is null, the default comparer is used.


## Examples

### Example #1
Βρείτε τις 5 μικρότερες τιμές στη λίστα `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
