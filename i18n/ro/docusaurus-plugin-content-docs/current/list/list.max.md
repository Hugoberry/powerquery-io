---
title: List.Max
---

# List.Max


Returnează valoarea maximă sau valoarea implicită pentru o listă necompletată.


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

Returnează elementul maxim din listă sau valoarea implicită opțională dacă lista este goală.

-   `list`: Lista de valori.
-   `default`: (Opțional) Valoarea de returnat dacă lista este goală.
-   `comparisonCriteria`: (Opțional) O funcție utilizată pentru a transforma valorile înainte de a fi comparate. Dacă acest parametru este `null`, valorile sunt comparate fără nicio transformare.
-   `includeNulls`: (Opțional) Indică dacă `null` valorile din listă trebuie incluse în determinarea elementului maxim. Valoarea implicită este `true`.


## Examples

### Example #1
Găsiți valoarea maximă din lista specificată.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Găsiți valoarea maximă din lista specificată sau returnați -1 dacă este goală.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Găsiți elementul într-o listă de valori text care este ultima în ordine alfabetică. Dacă lista este goală, returnați „none”.
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
Găsiți cea mai recentă dată dintr-o listă de date germane. Dacă lista este goală, returnați 1 ianuarie 2000.
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
