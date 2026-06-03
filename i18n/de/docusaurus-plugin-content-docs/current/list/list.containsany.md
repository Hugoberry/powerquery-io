---
title: List.ContainsAny
---

# List.ContainsAny


Gibt an, ob eine Liste mindestens einen der Werte aus einer anderen Liste enthält.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob die Liste einen der Werte aus einer anderen Liste enthält. Gibt `true` zurück, wenn der Wert in der Liste gefunden wird, `ansonsten false`.

-   `list`: Die zu durchsuchende Liste.
-   `values`: Die Liste der Werte, nach denen in der ersten Liste gesucht werden soll.
-   `equationCriteria`: (Optional) Der Vergleichswert, mit dem bestimmt wird, ob zwei Werte gleich sind.


## Examples

### Example #1
Ermittelt, ob die Liste \{1, 2, 3, 4, 5\} die Zahl 3 oder 9 enthält.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob die Liste \{1, 2, 3, 4, 5\} die Zahl 6 oder 7 enthält.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Ermitteln Sie, ob die Liste ein Pferd oder eine Eule enthält, wobei die Groß- und Kleinschreibung ignoriert wird.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Ermitteln Sie, ob die Liste ein Datum vom 8. April 2022 oder vom 12. Januar 2021 enthält.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
