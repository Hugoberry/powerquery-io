---
title: Marketo.Activities
---

# Marketo.Activities


Palauttaa liiditapahtumien taulukon.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Tekee kutsun Marketo REST -ohjelmointirajapintapäätepisteelle osoitteessa `url`/rest/v1/activities.json. Kaikki luettelon `activityIds` toimet, jotka on tehty `startTime` jälkeen, palautetaan.


## Examples

### Example #1
Noutaa taulukon verkkosivulla vierailuista 1. marraskuuta 2015 jälkeen
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Taulukko kaikista verkkosivulla vierailuista 1. marraskuuta jälkeen
```



