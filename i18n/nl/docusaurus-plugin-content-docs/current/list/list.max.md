---
title: List.Max
---

# List.Max


Retourneert de maximumwaarde of de standaardwaarde voor een lege lijst.


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

Retourneert het maximumitem in de lijst of de optionele standaardwaarde als de lijst leeg is.

-   `list`: De lijst met waarden.
-   `default`: (optioneel) De waarde die moet worden geretourneerd als de lijst leeg is.
-   `comparisonCriteria`: (optioneel) Een functie die wordt gebruikt om de waarden te transformeren voordat ze worden vergeleken. Als deze parameter `null` is, worden de waarden vergeleken zonder transformatie.
-   `includeNulls`: (optioneel) Geeft aan of `null` waarden in de lijst moeten worden opgenomen bij het bepalen van het maximumitem. De standaardwaarde is `waar`.


## Examples

### Example #1
Zoek de maximumwaarde in de opgegeven lijst.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Zoek de maximumwaarde in de opgegeven lijst of retourneer -1 als deze leeg is.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Zoek het item in een lijst met tekstwaarden die voor het laatst alfabetisch zijn. Als de lijst leeg is, retourneer je ''geen''.
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
Zoek de meest recente datum uit een lijst met Duitse datums. Als de lijst leeg is, retourneer je 1 januari 2000.
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
