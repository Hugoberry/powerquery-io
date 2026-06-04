---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Palauttaa siirtymistaulukon, joka sisältää Azure-tallennustilasäilön määritetyltä tililtä löytyneet taulukot.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Palauttaa Azure-tallennustilasäilöstä siirtymistaulukon, joka sisältää rivin kullekin taulukolle, joka löytyy tilin URL-osoitteesta `account`. Kukin rivi sisältää linkin Azure-taulukkoon. Valinnainen tietueparametri, `options`, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `Timeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin pyyntö palvelimeen lopetetaan. Oletusarvo on lähdekohtainen.



## Category
Accessing data
