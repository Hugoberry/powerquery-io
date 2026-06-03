---
title: List.MaxN
---

# List.MaxN


Gibt die größten Werte in der Liste zurück. Hierzu muss die Anzahl der zurückzugebenden Werte oder eine Filterbedingung angegeben werden.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Gibt die größten Werte in der angegebenen Liste zurück. Nachdem die Zeilen sortiert wurden, können optionale Parameter angegeben werden, um das Ergebnis weiter zu filtern.

-   `list`: Liste der Werte.
-   `countOrCondition`: Gibt die Anzahl der zurückzugebenden Werte oder eine Filterbedingung an. Wenn eine Zahl angegeben wird, wird eine Liste mit bis zu `countOrCondition` Elementen in absteigender Reihenfolge zurückgegeben. Wenn eine Bedingung angegeben wird, enthält die zurückgegebene Liste alle Elemente, die die Bedingung erfüllen.
-   `comparisonCriteria`: (Optional) Eine Funktion, die verwendet wird, um die Werte vor dem Vergleich zu transformieren. Wenn dieser Parameter `null` ist, werden die Werte ohne Transformation verglichen.
-   `includeNulls`: (Optional) Gibt an, ob `null` Werte in der Liste bei der Bestimmung des maximalen Elements berücksichtigt werden sollen. Der Standardwert ist `true`.


## Examples

### Example #1
Ermitteln Sie die fünf größten Werte in der angegebenen Liste.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Suchen Sie die Wörter mit mehr als drei Zeichen.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Suchen Sie die drei neuesten Datumsangaben aus einer Liste mit deutschen Datumsangaben.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
