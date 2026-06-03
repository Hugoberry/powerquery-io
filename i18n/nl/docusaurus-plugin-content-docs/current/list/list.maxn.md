---
title: List.MaxN
---

# List.MaxN


Retourneert de maximumwaarde(n) uit de lijst. Het aantal waarden dat moet worden geretourneerd of een filtervoorwaarde moet worden opgegeven.


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

Retourneert de maximumwaarde(n) in de opgegeven lijst. Nadat de rijen zijn gesorteerd, kunnen optionele parameters worden opgegeven om het resultaat verder te filteren.

-   `list`: de lijst met waarden.
-   `countOrCondition`: hiermee geef je het aantal waarden op dat moet worden geretourneerd of een filtervoorwaarde. Als een getal is opgegeven, wordt een lijst met maximaal `countOrCondition` items in aflopende volgorde geretourneerd. Als er een voorwaarde is opgegeven, bevat de geretourneerde lijst alle items die aan de voorwaarde voldoen.
-   `comparisonCriteria`: (optioneel) een functie die wordt gebruikt om de waarden te transformeren voordat ze worden vergeleken. Als deze parameter `null` is, worden de waarden vergeleken zonder transformatie.
-   `includeNulls`: (optioneel) geeft aan of `null` waarden in de lijst moeten worden opgenomen bij het bepalen van het maximumitem. De standaardwaarde is `true`.


## Examples

### Example #1
Zoek de vijf belangrijkste waarden in de opgegeven lijst.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Zoek de woorden met meer dan 3 tekens.
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
Zoek de drie meest recente datums uit een lijst met Duitse datums.
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
