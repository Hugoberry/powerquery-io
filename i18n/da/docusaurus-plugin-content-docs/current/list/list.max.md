---
title: List.Max
---

# List.Max


Returnerer den største værdi eller standardværdien, hvis listen er tom.


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

Returnerer det maksimale element på listen eller den valgfri standardværdi, hvis listen er tom.

-   `list`: Listen over værdier.
-   `default`: (Valgfrit) Den værdi, der skal returneres, hvis listen er tom.
-   `comparisonCriteria`: (Valgfrit) En funktion, der bruges til at transformere værdierne, før de sammenlignes. Hvis denne parameter er `null`, sammenlignes værdierne uden transformation.
-   `includeNulls`: (Valgfrit) Angiver, om `null` værdierne på listen skal inkluderes ved bestemmelse af det maksimale element. Standardværdien er `true`.


## Examples

### Example #1
Find maksimumværdien på den angivne liste.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Find maksimumværdien på den angivne liste, eller returner -1, hvis den er tom.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Find elementet på en liste over tekstværdier, der senest er alfabetisk. Hvis listen er tom, returneres "ingen".
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
Find den seneste dato på en liste over tyske datoer. Hvis listen er tom, returneres 1. januar 2000.
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
