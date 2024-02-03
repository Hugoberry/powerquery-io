---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Palauttaa liiditapahtumien taulukon.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Tekee kutsun Marketo REST -ohjelmointirajapintapäätepisteelle osoitteessa <code>url</code>/rest/v1/activities.json. Kaikki luettelon <code>activityIds</code> toimet, jotka on tehty <code>startTime</code> jälkeen, palautetaan.


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



