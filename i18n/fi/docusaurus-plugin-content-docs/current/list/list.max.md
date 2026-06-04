---
title: List.Max
---

# List.Max


Palauttaa enimmäisarvon tai oletusarvon, jos luettelo on tyhjä.


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

Palauttaa luettelon suurimman kohteen tai valinnaisen oletusarvon, jos luettelo on tyhjä.

-   `list`: Arvoluettelo.
-   `default`: (Valinnainen) palautettava arvo, jos luettelo on tyhjä.
-   `comparisonCriteria`: (Valinnainen) funktio, jota käytetään arvojen muuntamiseen ennen niiden vertailua. Jos tämä parametri on `null`, arvoja verrataan ilman muuntamista.
-   `includeNulls`: (Valinnainen) ilmaisee, sisällytetäänkö luettelon `null`\-arvot suurimman kohteen määrittämiseen. Oletusarvo on `true`.


## Examples

### Example #1
Etsi määritetyn luettelon suurin arvo.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Etsi määritetyn luettelon suurin arvo tai palauta -1, jos luettelo on tyhjä.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Etsi tekstiarvoluettelosta aakkosjärjestyksessä viimeinen kohde. Jos luettelo on tyhjä, palauta "none".
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
Etsi viimeisin päivämäärä saksankielisestä päivämääräluettelosta. Jos luettelo on tyhjä, palauta 1. tammikuuta 2000.
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
