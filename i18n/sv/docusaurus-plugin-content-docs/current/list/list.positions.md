---
title: List.Positions
---

# List.Positions


Returnerar en lista med förskjutningar för aktuella indata.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Returnerar en lista med förskjutningar för den angivna indatalistan.

-   `list`: Indatalistan.

När du använder `List.Transform` för att ändra en lista kan listan med positioner användas för att ge transformeringen åtkomst till positionen.


## Examples

### Example #1
Hitta förskjutningarna för värden i listan \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Skapa en tabell som tilldelar varje kund ett ID baserat på kundens position i listan.
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
