---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Palauttaa siirtymistaulukon, joka sisältää Azure-tallennustilasäilön määritetyltä tililtä löytyneet taulukot.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Palauttaa Azure-tallennustilasäilöstä siirtymistaulukon, joka sisältää rivin kullekin taulukolle, joka löytyy tilin URL-osoitteesta <code>account</code>. Kukin rivi sisältää linkin Azure-taulukkoon. Valinnainen tietueparametri <code>options</code> voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:    <ul><li><code>Timeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin pyynt&#246; palvelimeen lopetetaan. Oletusarvo on l&#228;hdekohtainen.</li></ul>



## Category
Accessing data
