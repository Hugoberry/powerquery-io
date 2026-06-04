---
title: List.Positions
---

# List.Positions


Vrátí seznam posunutí pro daný vstup.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Vrátí seznam posunů pro zadaný vstupní seznam.

-   `list`: Vstupní seznam.

Při použití funkce `List.Transform` ke změně seznamu lze použít seznam pozic a poskytnout tak transformační funkci přístup k dané pozici.


## Examples

### Example #1
Zjistí posunutí hodnot v seznamu \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Vytvořte tabulku, která každému zákazníkovi přiřadí ID na základě pozice zákazníka v seznamu.
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
