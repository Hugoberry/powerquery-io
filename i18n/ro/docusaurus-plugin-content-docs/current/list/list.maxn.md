---
title: List.MaxN
---

# List.MaxN


Returnează valorile maxime din listă. Trebuie specificat numărul de valori de returnat sau o condiție de filtrare.


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

Returnează valorile maxime din lista specificată. După sortarea rândurilor, pot fi specificați parametri opționali pentru a filtra în continuare rezultatul.

-   `list`: Lista de valori.
-   `countOrCondition`: Specifică numărul de valori de returnat sau o condiție de filtrare. Dacă este specificat un număr, se returnează o listă de până la `countOrCondition` elemente în ordine descrescătoare. Dacă este specificată o condiție, lista returnată include toate elementele care îndeplinesc condiția.
-   `comparisonCriteria`: (Opțional) O funcție utilizată pentru a transforma valorile înainte de a fi comparate. Dacă acest parametru este `null`, valorile sunt comparate fără nicio transformare.
-   `includeNulls`: (Opțional) Indică dacă `null` valorile din listă trebuie incluse în determinarea elementului maxim. Valoarea implicită este `true`.


## Examples

### Example #1
Găsiți primele 5 valori din lista specificată.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Găsiți cuvintele cu mai mult de 3 caractere.
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
Găsiți cele mai recente trei date dintr-o listă de date germane.
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
