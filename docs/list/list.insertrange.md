---
title: List.InsertRange
---

# List.InsertRange


Inserts values into a list at the given index.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Returns a new list produced by inserting the values in `values` into `list` at `index`. The first position in the list is at index 0.

-   `list`: The target list where values are to be inserted.
-   `index`: The index of the target list(`list`) where the values are to be inserted. The first position in the list is at index 0.
-   `values`: The list of values which are to be inserted into `list`.


## Examples

### Example #1
Insert the list (\{3, 4\}) into the target list (\{1, 2, 5\}) at index 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Insert a list with a nested list (\{1, \{1.1, 1.2\}\}) into a target list (\{2, 3, 4\}) at index 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
