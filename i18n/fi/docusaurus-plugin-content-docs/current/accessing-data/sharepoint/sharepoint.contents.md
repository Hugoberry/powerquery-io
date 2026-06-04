---
title: SharePoint.Contents
---

# SharePoint.Contents


Palauttaa taulukon, joka sisältää SharePoint-sivuston sisällön.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää rivin kullekin määritetystä SharePoint-sivustosta `url` löytyvälle kansiolle ja tiedostolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön. `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `ApiVersion` : Luku (14 tai 15) tai teksti Auto, joka määrittää tälle sivustolle käytettävän SharePoint-ohjelmointirajapinnan version. Kun tätä ei määritetä, käytetään ohjelmointirajapinnan versiota 14. Kun määritetään Auto, palvelimen versio selvitetään automaattisesti, jos se on mahdollista, ja muussa tapauksessa käytetään version oletusarvoa 14. Muut kuin englanninkieliset SharePoint-sivustot edellyttävät versiota 15.
-   `Implementation` : Valinnainen. Määrittää käytettävän SharePoint-yhdistimen version. Hyväksytyt arvot ovat 2.0 tai tyhjä arvo. Jos arvo on 2.0, käytetään SharePoint-yhdistimen 2.0-toteutusta. Jos arvo on tyhjä, käytetään SharePoint-yhdistimen alkuperäistä toteutusta.



## Category
Accessing data
