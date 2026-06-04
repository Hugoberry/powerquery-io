---
title: List.Max
---

# List.Max


Vrne največjo vrednost ali privzeto vrednost za prazen seznam.


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

Vrne največji element na seznamu ali izbirno privzeto vrednost, če je seznam prazen.

-   `list`: Seznam vrednosti.
-   `default`: (izbirno) Vrednost, ki je vrnjena, če je seznam prazen.
-   `comparisonCriteria`: (izbirno) Funkcija, ki je uporabljena za preoblikovanje vrednosti pred primerjavo. Če ima ta parameter vrednost `null`, so vrednosti primerjane brez preoblikovanja.
-   `includeNulls`: (izbirno) Označuje, ali je treba vrednosti `null` na seznamu vključiti pri določanju največjega elementa. Privzeta vrednost je `true`.


## Examples

### Example #1
Poiščite največjo vrednost na navedenem seznamu.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Poiščite največjo vrednost na navedenem seznamu ali pa vrnite –1, če je seznam prazen.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Poiščite element na seznamu besedilnih vrednosti, ki je zadnji po abecedi. Če je seznam prazen, vrnite"brez".
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
Poiščite najnovejši datum s seznama nemških datumov. Če je seznam prazen, vrnite"1. januar 2000".
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
