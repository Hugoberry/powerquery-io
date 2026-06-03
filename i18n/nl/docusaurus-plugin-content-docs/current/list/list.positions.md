---
title: List.Positions
---

# List.Positions


Retourneert een lijst met verschuivingen voor de invoer.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Geeft een lijst met offsets terug voor de opgegeven invoerlijst.

-   `list`: de invoerlijst.

Bij gebruik van `List.Transform` om een lijst te wijzigen, kan de lijst met posities worden gebruikt om de transformatie toegang te geven tot de positie.


## Examples

### Example #1
De verschuivingen van waarden in de lijst \{1, 2, 3, 4, null, 5\} zoeken.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Maak een tabel die aan elke klant een id toewijst op basis van de positie van de klant in de lijst.
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
