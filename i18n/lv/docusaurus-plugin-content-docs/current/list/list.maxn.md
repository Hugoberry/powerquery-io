---
title: List.MaxN
---

# List.MaxN


Tiek atgriezta(-s) saraksta maksimālā(-s) vērtība(-s). Ir jānorāda atgriežamo vērtību skaits vai filtra nosacījums.


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

Tiek atgriezta(s) maksimālā(s) vērtība(s) norādītajā sarakstā. Pēc rindu kārtošanas var norādīt papildu parametrus, lai papildus filtrētu rezultātu.

-   `list`: vērtību saraksts.
-   `countOrCondition`: norāda atgriežamo vērtību skaitu vai filtra nosacījumu. Ja ir norādīts skaitlis, tiek atgriezts saraksts ar līdz pat `countOrCondition` vienumiem dilstošā secībā. Ja ir norādīts nosacījums, atgrieztajā sarakstā ir visi vienumi, kas atbilst nosacījumam.
-   `comparisonCriteria`: (neobligāti) funkcija, kas tiek izmantota vērtību transformācijai pirms tās tiek salīdzinātas. Ja šis parametrs ir `null`, tad vērtības tiek salīdzinātas bez transformācijas.
-   `includeNulls`: (neobligāti) norāda, vai `null` saraksta vērtības ir jāiekļauj, nosakot maksimālo vienumu. Noklusējuma vērtība ir `true`.


## Examples

### Example #1
Iegūstiet 5 populārākās vērtības norādītajā sarakstā.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Atrodiet vārdus, kuru rakstzīmju skaits pārsniedz 3 rakstzīmes.
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
Atrodiet trīs visjaunākos datumus no Vācijas datumu saraksta.
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
