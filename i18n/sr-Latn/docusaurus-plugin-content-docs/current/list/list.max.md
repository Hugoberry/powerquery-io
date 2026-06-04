---
title: List.Max
---

# List.Max


Vraća maksimalnu ili podrazumevanu vrednost za praznu listu.


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

Vraća maksimalnu stavku sa liste ili opcionalnu podrazumevanu vrednost ako je lista prazna.

-   `list`: Lista vrednosti.
-   `default`: (Opcionalno) Vrednost koja se vraća ako je lista prazna.
-   `comparisonCriteria`: (Opcionalno) Funkcija koja se koristi za transformisanje vrednosti pre nego što se uporede. Ako je ovaj parametar `null`, vrednosti se upoređuju bez transformacije.
-   `includeNulls`: (Opcionalno) Označava da li `null` vrednosti na listi treba da budu uključene u određivanje maksimalne stavke. Podrazumevana vrednost je `true`.


## Examples

### Example #1
Pronađite maksimalnu vrednost u navedenoj listi.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Pronađite maksimalnu vrednost na navedenoj listi ili vratite –1 ako je prazna.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Pronađite stavku na listi tekstualnih vrednosti koja je poslednja po abecedi. Ako je lista prazna, vratite „nijedno“.
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
Pronađite najnoviji datum sa liste nemačkih datuma. Ako je lista prazna, vratite „1. januar 2000.“
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
