---
title: List.MaxN
---

# List.MaxN


Vráti maximálne hodnoty v zozname. Musí sa stanoviť počet hodnôt, ktoré sa majú vrátiť, alebo podmienka filtra.


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

Vráti maximálne hodnoty v zadanom zozname. Po zoradení riadkov možno zadať voliteľné parametre na ďalšie filtrovanie výsledku.

-   `list`: Zoznam hodnôt.
-   `countOrCondition`: Určuje počet hodnôt, ktoré sa majú vrátiť, alebo podmienku filtra. Ak je zadané číslo, vráti sa zoznam maximálny počet položiek (`countOrCondition`) v zostupnom poradí. Ak je zadaná podmienka, vrátený zoznam obsahuje všetky položky, ktoré spĺňajú podmienku.
-   `comparisonCriteria`: (Voliteľné) Funkcia, ktorá sa používa na transformáciu hodnôt pred ich porovnaním. Ak je tento parameter `null`, hodnoty sa porovnajú bez transformácie.
-   `includeNulls`: (Voliteľné) Označuje, či sa hodnoty `null` v zozname majú zahrnúť do určovania maximálnej položky. Predvolená hodnota je `true`.


## Examples

### Example #1
Nájdite prvých 5 hodnôt v zadanom zozname.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Nájdite slová s viac ako 3 znakmi.
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
Nájdite tri najnovšie dátumy zo zoznamu nemeckých dátumov.
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
