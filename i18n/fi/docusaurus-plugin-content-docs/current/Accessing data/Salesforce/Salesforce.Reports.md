---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Palauttaa raportit Salesforce-tilistä.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Palauttaa tunnistetiedoissa annetun Salesforce-tilin raportit. Tili yhdistetään annetun ympäristön <code>loginUrl</code> kautta. Jos ympäristöä ei anneta, tili yhdistetään tuotantoon (https://login.salesforce.com). Valinnaisen tietueparametrin <code>options</code> avulla voidaan määrittää lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:    <ul><li><code>ApiVersion</code> : T&#228;lle kyselylle k&#228;ytett&#228;v&#228; Salesforce-ohjelmointirajapinnan versio. Kun sit&#228; ei m&#228;&#228;ritet&#228;, k&#228;ytet&#228;&#228;n ohjelmointirajapinnan versiota 29.0.</li><li><code>Timeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin pyynt&#246; palvelimeen lopetetaan. Oletusarvo on l&#228;hdekohtainen.</li></ul>    



## Category
Accessing data
