---
title: List.Sort
---

# List.Sort


Ordena una llista de dades d'acord amb els criteris especificats.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sorts a list of data, `list`, according to the optional criteria specified. An optional parameter, `comparisonCriteria`, can be specified as the comparison criterion. This can take the following values:

-   To control the order, the comparison criterion can be an Order enum value. (`Order.Descending`, `Order.Ascending`).
-   To compute a key to be used for sorting, a function of 1 argument can be used.
-   To both select a key and control order, comparison criterion can be a list containing the key and order (`{each 1 / _, Order.Descending}`).
-   To completely control the comparison, a function of 2 arguments can be used (such as Value.Compare). This function will be passed two items from the list (any two items, in any order). The function should return one of the following values:
    -   `-1`: The first item is less than the second item.
    -   `0`: The items are equal.
    -   `1`: The first item is greater than the second item.


## Examples

### Example #1
Ordena la llista \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ordena la llista \{2, 3, 1\} en ordre descendent.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Ordena la llista \{2, 3, 1\} en ordre descendent amb el mètode Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
