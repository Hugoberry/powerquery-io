---
title: List.Positions
---

# List.Positions


Tiek atgriezts saraksts, kurā ir ietvertas ievades vērtību nobīdes.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Atgriež sarakstu, kurā ir norādītas ievades saraksta vērtību nobīdes.

-   `list`: Ievades saraksts.

Ja maināt sarakstu, izmantojot funkciju `List.Transform`, pozīciju sarakstu varat izmantot, lai pārveidošanas funkcijai nodrošinātu piekļuvi konkrētajai pozīcijai.


## Examples

### Example #1
Iegūstiet vērtību nobīdes sarakstā \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Izveidojiet tabulu, kas katram klientam piešķir ID, pamatojoties uz klienta pozīciju sarakstā.
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
