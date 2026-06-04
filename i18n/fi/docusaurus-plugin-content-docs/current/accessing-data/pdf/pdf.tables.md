---
title: Pdf.Tables
---

# Pdf.Tables


Palauttaa PDF-tiedostosta löytyneet taulukot.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Palauttaa kohteesta `pdf` löytyvät taulukot. Valinnainen tietueparametri `options` voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `Implementation` : Taulukoiden tunnistamisessa käytettävän algoritmin versio. Vanhat versiot ovat käytettävissä vain taaksepäin yhteensopivuuden varmistamiseksi, jotta algoritmipäivitykset eivät riko vanhoja kyselyitä. Uusimman version pitäisi aina antaa parhaat tulokset. Kelvolliset arvot ovat 1.3, 1.2, 1.1 tai tyhjäarvo.
-   `StartPage` : Määrittää tarkasteltavan sivualueen ensimmäisen sivun. Oletusarvo: 1.
-   `EndPage` : Määrittää tarkasteltavan sivualueen viimeisen sivun. Oletusarvo: tiedoston viimeinen sivu.
-   `MultiPageTables` : Määrittää, yhdistetäänkö samankaltaiset taulukot peräkkäisillä sivuilla automaattisesti yksittäiseksi taulukoksi. Oletusarvo: true.
-   `EnforceBorderLines` : Määrittää, pakotetaanko reunaviivat aina solun reunoina (kun arvo on true) vai käytetäänkö niitä yksinkertaisesti yhtenä vihjeenä monien joukossa solun reunojen määrittämiseen (kun arvo on false). Oletusarvo: false.


## Examples

### Example #1
Palauttaa sample.pdf-tiedoston sisältämät taulukot.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Tietojen käyttö
