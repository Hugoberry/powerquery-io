---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Nouda SparkPost-liittimen paljastamat sisäiset taulukot ja käyttäjän määrittämän päivien määrän koostetut tiedot. Kun nämä taulukot päivitetään tai tehdään kutsuja SparkPost-ohjelmointirajapinnalle käyttäen tätä liitintä, muista, että SparkPost-ohjelmointirajapinnalla on tiukka ohjelmointirajapinnan nopeusraja. Jos näet tilakoodin 429 palautettuna SparkPost-palvelimesta, olet saavuttanut nopeusrajan ja sinun on odotettava jonkin aikaa ennen uusien kutsujen tekemistä. Kun valitset arvoa päivien määrän parametrille, huomaa, että ohjelmointirajapinta tallentaa tiedot vain kuudelta kuukaudelta.


