---
title: List.MaxN
---

# List.MaxN


Vrne največje vrednosti na seznamu. Navesti je treba število vrednosti, ki so vrnjene, ali pogoj filtriranja.


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

Vrne največje vrednosti na navedenem seznamu. Ko so vrstice razvrščene, lahko določite izbirne parametre za nadaljnje filtriranje rezultata.

-   `list`: Seznam vrednosti.
-   `countOrCondition`: Določa število vrednosti za vrnitev ali pogoj filtra. Če je število določeno, je vrnjen seznam do `countOrCondition` elementov v padajočem vrstnem redu. Če je pogoj določen, vrnjeni seznam vključuje vse elemente, ki izpolnjujejo pogoj.
-   `comparisonCriteria`: (izbirno) Funkcija, ki je uporabljena za preoblikovanje vrednosti pred primerjavo. Če ima ta parameter vrednost `null`, so vrednosti primerjane brez preoblikovanja.
-   `includeNulls`: (izbirno) Označuje, ali je treba vrednosti `null` na seznamu vključiti pri določanju največjega elementa. Privzeta vrednost je `true`.


## Examples

### Example #1
Poiščite prvih pet vrednosti na navedenem seznamu.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Poiščite besede z več kot tremi znaki.
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
Poiščite tri najnovejše datume s seznama nemških datumov.
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
