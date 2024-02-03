---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Palauttaa taulukon, joka sisältää SharePoint-luettelon sisällön.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää rivin kullekin määritetystä SharePoint-luettelosta <code>url</code> löytyvälle List-kohteelle. Kukin rivi sisältää List-kohteen ominaisuudet. <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:    <ul><li><code>ApiVersion</code> : Luku (14 tai 15) tai teksti Auto, joka m&#228;&#228;ritt&#228;&#228; t&#228;lle sivustolle k&#228;ytett&#228;v&#228;n SharePoint-ohjelmointirajapinnan version. Kun t&#228;t&#228; ei m&#228;&#228;ritet&#228;, k&#228;ytet&#228;&#228;n ohjelmointirajapinnan versiota 14. Kun m&#228;&#228;ritet&#228;&#228;n Auto, palvelimen versio selvitet&#228;&#228;n automaattisesti, jos se on mahdollista, ja muussa tapauksessa k&#228;ytet&#228;&#228;n version oletusarvoa 14. Muut kuin englanninkieliset SharePoint-sivustot edellytt&#228;v&#228;t versiota 15.</li><li><code>Implementation</code> : Valinnainen. M&#228;&#228;ritt&#228;&#228; k&#228;ytett&#228;v&#228;n SharePoint-yhdistimen version. Hyv&#228;ksytyt arvot ovat 2.0 tai tyhj&#228; arvo. Jos arvo on 2.0, k&#228;ytet&#228;&#228;n SharePoint-yhdistimen 2.0-toteutusta. Jos arvo on tyhj&#228;, k&#228;ytet&#228;&#228;n SharePoint-yhdistimen alkuper&#228;ist&#228; toteutusta.</li><li><code>ViewMode</code> : Valinnainen. T&#228;t&#228; asetusta sovelletaan vain toteutukselle 2.0. Hyv&#228;ksytyt arvot ovat Kaikki ja Oletus. Jos arvoa ei m&#228;&#228;ritet&#228;, arvoksi m&#228;&#228;ritet&#228;&#228;n Kaikki. Kun Kaikki on m&#228;&#228;ritetty, n&#228;kym&#228; sis&#228;lt&#228;&#228; kaikki k&#228;ytt&#228;j&#228;n luomat ja j&#228;rjestelm&#228;n m&#228;&#228;ritt&#228;m&#228;t sarakkeet. Kun Oletus on m&#228;&#228;ritetty, n&#228;kym&#228; vastaa n&#228;kym&#228;&#228;, jonka k&#228;ytt&#228;j&#228; n&#228;kee tarkastellessaan luetteloa verkossa n&#228;kym&#228;ss&#228;, jonka k&#228;ytt&#228;j&#228; m&#228;&#228;ritti oletusn&#228;kym&#228;ksi asetuksissaan. Jos k&#228;ytt&#228;j&#228; muokkaa oletusn&#228;kym&#228;&#228;ns&#228; joko k&#228;ytt&#228;j&#228;n luomien tai j&#228;rjestelm&#228;n m&#228;&#228;ritt&#228;mien sarakkeiden lis&#228;&#228;mist&#228; tai poistamista varten tai luomalla uuden n&#228;kym&#228;n ja m&#228;&#228;ritt&#228;m&#228;ll&#228; sen oletukseksi, n&#228;m&#228; muutokset tulevat voimaan yhdistimen kautta.</li><li><code>DisableAppendNoteColumns</code> : Est&#228;&#228; yhdistint&#228; k&#228;ytt&#228;m&#228;st&#228; erillist&#228; p&#228;&#228;tepistett&#228; muistiinpanosarakkeille.</li></ul>    



## Category
Accessing data
