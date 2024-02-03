---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Tämän funktion avulla voidaan tehdä kutsu mihin tahansa SparkPost-ohjelmointirajapinta v1:n tarjoamista luetteloiden päätepisteistä. Kun SparkPost-ohjelmointirajapinnalle tehdään kutsuja käyttäen tätä funktiota, muista, että SparkPost-ohjelmointirajapinnalla on tiukka ohjelmointirajapinnan nopeusraja. Jos näet tilakoodin 429 palautettuna SparkPost-palvelimesta, olet saavuttanut nopeusrajan ja sinun on odotettava jonkin aikaa ennen uusien kutsujen tekemistä.


## Examples

### Example #1 
Palauttaa taulukon, jossa on yksittäinen sarake, jossa on tiedot jostakin SparkPost API v1:n luetteloiden päätepisteestä (lisätietoja on SparkPostin dokumentaatiossa).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



