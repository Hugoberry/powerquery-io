---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Palauttaa käytettävissä olevien mittareiden taulukon SparkPost-ohjelmointirajapinnan versiosta v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Tämän funktion avulla voidaan noutaa tietoja tietystä SparkPost-ohjelmointirajapinta v1:n mittareiden päätepisteestä. Kun nämä taulukot päivitetään tai tehdään kutsuja SparkPost-ohjelmointirajapinnalle käyttäen tätä funktiota, muista, että SparkPost-ohjelmointirajapinnalla on tiukka ohjelmointirajapinnan nopeusraja. Jos näet tilakoodin 429 palautettuna SparkPost-palvelimesta, olet saavuttanut nopeusrajan ja sinun on odotettava jonkin aikaa ennen uusien kutsujen tekemistä. Kun valitset arvoa päivien määrän parametrille, huomaa, että ohjelmointirajapinta tallentaa tiedot vain kuudelta kuukaudelta.


## Examples

### Example #1 
Noutaa toimitettavuusmittarit count_sent ja count_rejected kaikille viimeisten kolmen päivän aikana koostetuille campaign_id-tunnuksille. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
taulukko
```



