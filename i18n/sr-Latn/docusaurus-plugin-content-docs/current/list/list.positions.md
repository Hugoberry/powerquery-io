---
title: List.Positions
---

# List.Positions


Vraća listu pomaka za unos.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Vraća listu pomaka za navedenu listu unosa.

-   `list`: Lista unosa.

Kada se za promenu liste koristi `List.Transform`, može se koristiti lista položaja da bi se transformaciji omogućio pristup položaju.


## Examples

### Example #1
Pronalaženje pomaka za vrednosti sa liste \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Kreirajte tabelu koja dodeljuje ID svakom klijentu na osnovu njegove pozicije na listi.
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
