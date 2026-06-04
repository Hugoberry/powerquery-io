---
title: List.MaxN
---

# List.MaxN


Palauttaa luettelon enimmäisarvot. Palautettavien arvojen määrä tai suodatusehto täytyy määrittää.


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

Palauttaa määritetyn luettelon enimmäisarvot. Kun rivit on lajiteltu, valinnaisia parametreja voi käyttää tuloksen tarkempaan suodattamiseen.

-   `list`: Arvoluettelo.
-   `countOrCondition`: Määrittää palautettavien arvojen määrän tai suodatinehdon. Jos määritetään numero, palautetaan enintään `countOrCondition` kohdetta laskevassa järjestyksessä. Jos määritetään ehto, palautettu luettelo sisältää kaikki ehdon täyttävät kohteet.
-   `comparisonCriteria`: (Valinnainen) funktio, jota käytetään arvojen muuntamiseen ennen niiden vertailua. Jos tämä parametri on `null`, arvoja verrataan ilman muuntamista.
-   `includeNulls`: (Valinnainen) ilmaisee, sisällytetäänkö luettelon `null`\-arvot suurimman kohteen määrittämiseen. Oletusarvo on `true`.


## Examples

### Example #1
Etsi määritetyn luettelon viisi suurinta arvoa.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Etsi sanat, joissa on yli kolme merkkiä.
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
Etsi kolme viimeisintä päivämäärää saksankielisestä päivämääräluettelosta.
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
