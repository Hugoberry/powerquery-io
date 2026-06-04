---
title: List.Max
---

# List.Max


Tiek atgriezta maksimālā vērtība vai noklusējuma vērtība, ja saraksts ir tukšs.


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

Tiek atgriezts saraksta maksimālais vienums vai neobligātā noklusējuma vērtība, ja saraksts ir tukšs.

-   `list`: vērtību saraksts.
-   `default`: (neobligāti) vērtība, kas jāatgriež, ja saraksts ir tukšs.
-   `comparisonCriteria`: (neobligāti) funkcija, kas tiek izmantota vērtību transformācijai pirms tās tiek salīdzinātas. Ja šis parametrs ir `null`, tad vērtības tiek salīdzinātas bez transformācijas.
-   `includeNulls`: (neobligāti) norāda, vai `null` saraksta vērtības ir jāiekļauj, nosakot maksimālo vienumu. Noklusējuma vērtība ir `true`.


## Examples

### Example #1
Iegūstiet maksimālo vērtību norādītajā sarakstā.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Atrodiet maksimālo vērtību norādītajā sarakstā vai atgrieziet -1, ja tā ir tukša.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Atrodiet vienumu teksta vērtību sarakstā, kas ir pēdējā alfabētiskā secībā. Ja saraksts ir tukšs, atgriezieties pie "none".
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
Atrodiet visjaunāko datumu no Vācijas datumu saraksta. Ja saraksts ir tukšs, atgriezieties pie 2000. gada 1. janvāra.
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
