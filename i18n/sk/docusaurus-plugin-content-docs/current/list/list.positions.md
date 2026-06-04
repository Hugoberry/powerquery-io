---
title: List.Positions
---

# List.Positions


Vráti zoznam posunov pre vstup.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Vráti zoznam posunov pre zadaný vstupný zoznam.

-   `list`: Vstupný zoznam.

Pri použití `List.Transform` na zmenu zoznamu sa zoznam pozícií môže použiť na poskytnutie prístupu transformácii k pozícii.


## Examples

### Example #1
Nájdite posuny hodnôt v zozname \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Vytvorte tabuľku, ktorá priradí každému zákazníkovi ID na základe jeho pozície v zozname.
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
