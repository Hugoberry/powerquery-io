---
title: List.Max
---

# List.Max


Vrátí maximální hodnotu nebo výchozí hodnotu, pokud je seznam prázdný.


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

Vrátí maximální položku v seznamu nebo volitelnou výchozí hodnotu, pokud je seznam prázdný.

 -   `list`: Seznam hodnot
-   `default`: (Volitelné) Hodnota, která se má vrátit, pokud je seznam prázdný
-   `comparisonCriteria`: (Volitelné) Funkce, která se používá k transformaci hodnot před jejich porovnáním. Pokud je tento parametr `null`, hodnoty se porovnávají bez jakékoli transformace.
-   `includeNulls`: (Nepovinné) Určuje, zda mají být do určení maximální položky zahrnuty hodnoty `null` v seznamu. Výchozí hodnota je `true`.


## Examples

### Example #1
Najít maximální hodnotu v zadaném seznamu
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Najít maximální hodnotu v zadaném seznamu nebo vrátit -1, pokud je prázdný
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Najít položku v seznamu textových hodnot, která je abecedně poslední. Pokud je seznam prázdný, vrátit „none“.
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
Najít nejnovější datum ze seznamu německých kalendářních dat. Pokud je seznam prázdný, vrátit 1. ledna 2000.
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
