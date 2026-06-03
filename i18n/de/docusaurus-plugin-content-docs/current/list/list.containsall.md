---
title: List.ContainsAll
---

# List.ContainsAll


Gibt an, ob eine Liste alle Werte aus einer anderen Liste enthält.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob die Liste alle Werte aus einer anderen Liste enthält. Gibt `true` zurück, wenn alle Werte in der Liste gefunden werden, `ansonsten false`.

-   `list`: Die zu durchsuchende Liste.
-   `values`: Die Liste der Werte, nach denen in der ersten Liste gesucht werden soll.
-   `equationCriteria`: (Optional) Der Vergleichswert, mit dem bestimmt wird, ob zwei Werte gleich sind.


## Examples

### Example #1
Ermitteln Sie, ob die Liste \{1, 2, 3, 4, 5\} die Zahlen 3 und 4 enthält.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Ermitteln Sie, ob die Liste \{1, 2, 3, 4, 5\} die Zahlen 5 und 6 enthält.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Ermitteln Sie, ob die Liste einen Hund und ein Pferd enthält, wobei die Groß- und Kleinschreibung ignoriert wird.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Ermitteln Sie, ob die Liste die Datumsangaben vom 8. April 2022 und vom 6. Juli 2021 enthält.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
