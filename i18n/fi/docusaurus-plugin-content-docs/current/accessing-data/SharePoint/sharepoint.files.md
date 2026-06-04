---
title: SharePoint.Files
---

# SharePoint.Files


Palauttaa taulukon, joka sisältää SharePoint-sivuston tiedostot.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää rivin kullekin määritetystä SharePoint-sivustosta `url` ja alikansioista löytyvälle tiedostolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön. `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `ApiVersion` : Luku (14 tai 15) tai teksti Auto, joka määrittää tälle sivustolle käytettävän SharePoint-ohjelmointirajapinnan version. Kun tätä ei määritetä, käytetään ohjelmointirajapinnan versiota 14. Kun määritetään Auto, palvelimen versio selvitetään automaattisesti, jos se on mahdollista, ja muussa tapauksessa käytetään version oletusarvoa 14. Muut kuin englanninkieliset SharePoint-sivustot edellyttävät versiota 15.



## Category
Accessing data
