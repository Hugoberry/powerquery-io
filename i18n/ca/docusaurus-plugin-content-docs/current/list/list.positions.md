---
title: List.Positions
---

# List.Positions


Retorna una llista de desplaçaments per a l'entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Retorna una llista de desplaçaments per a la llista d'entrada especificada.

-   `list`: la llista d'entrada.

Quan s'utilitzi `List.Transform` per canviar una llista, es pot utilitzar la llista de posicions per donar a la transformació accés a la posició.


## Examples

### Example #1
Troba els desplaçaments dels valors de la llista \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Crea una taula que assigni un ID a cada client segons la posició del client a la llista.
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
