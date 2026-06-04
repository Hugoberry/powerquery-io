---
title: List.MaxN
---

# List.MaxN


Vraća maksimalne vrednosti sa liste. Mora se navesti broj vrednosti koje treba vratiti ili uslov filtera.


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

Vraća maksimalnu vrednost u navedenoj listi. Kada se redovi sortiraju, opcionalni parametri se mogu navesti da bi se rezultat dodatno filtrirao.

-   `list`: Lista vrednosti.
-   `countOrCondition` Navodi broj vrednosti koje treba vratiti ili uslov filtera. Ako je naveden broj, vraća se lista do ovoliko stavki u redosledom Ž do A: `countOrCondition`. Ako je naveden uslov, vraćena lista uključuje sve stavke koje ispunjavaju uslov.
-   `comparisonCriteria`: (opcionalno) Funkcija koja se koristi za pretvaranje vrednosti pre nego što se uporede. Ako je ovaj parametar `null`, vrednosti se upoređuju bez pretvaranja.
-   `includeNulls`: (opcionalno) Označava da li `null` vrednosti na listi treba da budu uključene u određivanje maksimalne stavke. Podrazumevana vrednost je `true`.


## Examples

### Example #1
Pronađite prvih 5 vrednosti u navedenoj listi.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Pronađite reči sa više od 3 znaka.
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
Pronađite tri najnovija datuma sa liste nemačkih datuma.
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
