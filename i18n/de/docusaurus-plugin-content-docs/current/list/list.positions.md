---
title: List.Positions
---

# List.Positions


Gibt eine Liste mit Offsets für die Eingabe zurück.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Gibt eine Liste mit Offsets für die angegebene Eingabeliste zurück.

-   `list`: Die Eingabeliste.

Wird eine Liste mithilfe von `List.Transform` geändert, kann der Transformation über die Positionenliste der Zugriff auf die Position ermöglicht werden.


## Examples

### Example #1
Ermittelt die Offsets der Werte in der Liste "\{1, 2, 3, 4, null, 5\}".
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Erstellen Sie eine Tabelle, die jedem Kunden basierend auf seiner Position in der Liste eine ID zuweist.
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
