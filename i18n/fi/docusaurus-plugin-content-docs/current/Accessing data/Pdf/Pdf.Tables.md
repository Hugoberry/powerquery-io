---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Palauttaa PDF-tiedostosta löytyneet taulukot.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Palauttaa kohteesta <code>pdf</code> löytyvät taulukot. Valinnainen tietueparametri <code>options</code> voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:    <ul><li><code>Implementation</code> : Taulukoiden tunnistamisessa k&#228;ytett&#228;v&#228;n algoritmin versio. Vanhat versiot ovat k&#228;ytett&#228;viss&#228; vain taaksep&#228;in yhteensopivuuden varmistamiseksi, jotta algoritmip&#228;ivitykset eiv&#228;t riko vanhoja kyselyit&#228;. Uusimman version pit&#228;isi aina antaa parhaat tulokset. Kelvolliset arvot ovat 1.3, 1.2, 1.1 tai tyhj&#228;arvo.</li><li><code>StartPage</code> : M&#228;&#228;ritt&#228;&#228; tarkasteltavan sivualueen ensimm&#228;isen sivun. Oletusarvo: 1.</li><li><code>EndPage</code> : M&#228;&#228;ritt&#228;&#228; tarkasteltavan sivualueen viimeisen sivun. Oletusarvo: tiedoston viimeinen sivu.</li><li><code>MultiPageTables</code> : M&#228;&#228;ritt&#228;&#228;, yhdistet&#228;&#228;nk&#246; samankaltaiset taulukot per&#228;kk&#228;isill&#228; sivuilla automaattisesti yksitt&#228;iseksi taulukoksi. Oletusarvo: true.</li><li><code>EnforceBorderLines</code> : M&#228;&#228;ritt&#228;&#228;, pakotetaanko reunaviivat aina solun reunoina (kun arvo on true) vai k&#228;ytet&#228;&#228;nk&#246; niit&#228; yksinkertaisesti yhten&#228; vihjeen&#228; monien joukossa solun reunojen m&#228;&#228;ritt&#228;miseen (kun arvo on false). Oletusarvo: false.</li></ul>    


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
