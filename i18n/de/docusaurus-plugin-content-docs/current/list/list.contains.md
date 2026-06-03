---
title: List.Contains
---

# List.Contains


Gibt an, ob die Liste den Wert enthält.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob die Liste den angegebenen Wert enthält. Gibt `true` zurück, wenn der Wert in der Liste gefunden wird, `ansonsten false`.

-   `list`: Die zu durchsuchende Liste.
-   `value`: Der Wert, nach dem in der Liste gesucht werden soll.
-   `equationCriteria`: (Optional) Der Vergleichswert, mit dem bestimmt wird, ob zwei Werte gleich sind.


## Examples

### Example #1
Ermittelt, ob die Liste \{1, 2, 3, 4, 5\} die Zahl 3 enthält.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob die Liste \{1, 2, 3, 4, 5\} die Zahl 6 enthält.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Die Groß-/Kleinschreibung wird ignoriert. Stellen Sie fest, ob die Liste „rh rh msi“ enthält.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Ermitteln Sie, ob die Liste das Datum 8. April 2022 enthält.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
