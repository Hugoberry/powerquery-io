---
title: List.Positions
---

# List.Positions


Returns a list of offsets for the input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Returns a list of offsets for the specified input list.

-   `list`: The input list.

When using `List.Transform` to change a list, the list of positions can be used to give the transform access to the position.


## Examples

### Example #1
Find the offsets of values in the list \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Create a table that assigns an ID to each customer based on the customer's position in the list.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
