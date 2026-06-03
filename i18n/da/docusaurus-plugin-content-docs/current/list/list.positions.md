---
title: List.Positions
---

# List.Positions


Returnerer en liste over forskydninger for inputtet.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Returnerer en liste over forskydninger for den specificerede inputliste.

-   `list`: Inputlisten.

Når du bruger `List.Transform` til at ændre en liste, kan listen over positioner bruges til at give transformationens adgang til positionen.


## Examples

### Example #1
Find forskydningerne for værdier på listen \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Opret en tabel, der tildeler et id til hver kunde baseret på kundens position på listen.
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
