---
title: List.Positions
---

# List.Positions


Retourne une liste de décalages pour l'entrée.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Retourne une liste de décalages pour la liste d’entrées spécifiée.

-   `list` : liste d’entrée.

Lorsque vous utilisez `List.Transform` pour modifier une liste, la liste des positions peut être utilisée pour donner à la transformation l’accès à la position.


## Examples

### Example #1
Recherche les décalages des valeurs dans la liste \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Créez une table qui attribue un ID à chaque client en fonction de la position du client dans la liste.
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
