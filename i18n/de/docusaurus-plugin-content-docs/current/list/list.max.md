---
title: List.Max
---

# List.Max


Gibt den größten Wert zurück. Ist die Liste leer, wird der Standardwert zurückgegeben.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Gibt das maximale Element in der Liste oder den optionalen Standardwert zurück, wenn die Liste leer ist.

-   `list`: Liste der Werte.
-   `default`: (Optional) Der Wert, der zurückgegeben wird, wenn die Liste leer ist.
-   `comparisonCriteria`: (Optional) Eine Funktion, die verwendet wird, um die Werte vor dem Vergleich zu transformieren. Wenn dieser Parameter `NULL` ist, werden die Werte ohne Transformation verglichen.
-   `includeNulls`: (Optional) Gibt an, ob `NULL` Werte in der Liste bei der Bestimmung des maximalen Elements berücksichtigt werden sollen. Der Standardwert ist `true`.


## Examples

### Example #1
Finden Sie die größten Werte in der angegebenen Liste.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Ermittelt den Maximalwert in der angegebenen Liste oder gibt -1 zurück, wenn die Liste leer ist.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Findet das alphabetisch zuletzt stehende Element in einer Liste von Textwerten. Ist die Liste leer, wird „keine“ zurückgegeben.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Suchen Sie die neuesten Datumsangaben aus einer Liste mit deutschen Datumsangaben. Ist die Liste leer, wird „1. Januar 2000“ zurückgegeben.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
