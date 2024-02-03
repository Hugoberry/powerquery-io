---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Palauttaa taulukon, joka sisältää SharePoint-sivuston sisällön.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää rivin kullekin määritetystä SharePoint-sivustosta <code>url</code> löytyvälle kansiolle ja tiedostolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön. <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:    <ul><li><code>ApiVersion</code> : Luku (14 tai 15) tai teksti Auto, joka m&#228;&#228;ritt&#228;&#228; t&#228;lle sivustolle k&#228;ytett&#228;v&#228;n SharePoint-ohjelmointirajapinnan version. Kun t&#228;t&#228; ei m&#228;&#228;ritet&#228;, k&#228;ytet&#228;&#228;n ohjelmointirajapinnan versiota 14. Kun m&#228;&#228;ritet&#228;&#228;n Auto, palvelimen versio selvitet&#228;&#228;n automaattisesti, jos se on mahdollista, ja muussa tapauksessa k&#228;ytet&#228;&#228;n version oletusarvoa 14. Muut kuin englanninkieliset SharePoint-sivustot edellytt&#228;v&#228;t versiota 15.</li></ul>    



## Category
Accessing data
