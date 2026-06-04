---
title: List.Positions
---

# List.Positions


Vrne seznam odmikov za vnos.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Vrne seznam odmikov za navedeni vnosni seznam.

-   `list`: Vnosni seznam.

Ko spreminjate seznam s funkcijo `List.Transform`, lahko uporabite seznam položajev, da omogočite pretvorbi dostop do položaja.


## Examples

### Example #1
Poiščite odmike vrednosti na seznamu \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Ustvarite tabelo, ki vsaki stranki dodeli ID glede na njen položaj na seznamu.
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
