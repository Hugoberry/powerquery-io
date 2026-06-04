---
title: SharePoint.Tables
---

# SharePoint.Tables


Palauttaa taulukon, joka sisältää SharePoint-luettelon sisällön.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää rivin kullekin määritetystä SharePoint-luettelosta `url` löytyvälle List-kohteelle. Kukin rivi sisältää List-kohteen ominaisuudet. `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `ApiVersion` : Luku (14 tai 15) tai teksti Auto, joka määrittää tälle sivustolle käytettävän SharePoint-ohjelmointirajapinnan version. Kun tätä ei määritetä, käytetään ohjelmointirajapinnan versiota 14. Kun määritetään Auto, palvelimen versio selvitetään automaattisesti, jos se on mahdollista, ja muussa tapauksessa käytetään version oletusarvoa 14. Muut kuin englanninkieliset SharePoint-sivustot edellyttävät versiota 15.
-   `Implementation` : Valinnainen. Määrittää käytettävän SharePoint-yhdistimen version. Hyväksytyt arvot ovat 2.0 tai tyhjä arvo. Jos arvo on 2.0, käytetään SharePoint-yhdistimen 2.0-toteutusta. Jos arvo on tyhjä, käytetään SharePoint-yhdistimen alkuperäistä toteutusta.
-   `ViewMode` : Valinnainen. Tätä asetusta sovelletaan vain toteutukselle 2.0. Hyväksytyt arvot ovat Kaikki ja Oletus. Jos arvoa ei määritetä, arvoksi määritetään Kaikki. Kun Kaikki on määritetty, näkymä sisältää kaikki käyttäjän luomat ja järjestelmän määrittämät sarakkeet. Kun Oletus on määritetty, näkymä vastaa näkymää, jonka käyttäjä näkee tarkastellessaan luetteloa verkossa näkymässä, jonka käyttäjä määritti oletusnäkymäksi asetuksissaan. Jos käyttäjä muokkaa oletusnäkymäänsä joko käyttäjän luomien tai järjestelmän määrittämien sarakkeiden lisäämistä tai poistamista varten tai luomalla uuden näkymän ja määrittämällä sen oletukseksi, nämä muutokset tulevat voimaan yhdistimen kautta.
-   `DisableAppendNoteColumns` : Estää yhdistintä käyttämästä erillistä päätepistettä muistiinpanosarakkeille.



## Category
Accessing data
