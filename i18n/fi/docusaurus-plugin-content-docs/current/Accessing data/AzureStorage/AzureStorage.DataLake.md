---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Palauttaa siirtymistaulukon, joka sisältää määritetystä säilöstä ja sen alikansioista löytyneet tiedostot Azure Data Lake Storagesta.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Palauttaa siirtymistaulukon, joka sisältää määritetystä säilöstä ja sen alikansioista tilin URL-osoitteessa <code>endpoint</code> löytyneet tiedostot Azure Data Lake Storage -tiedostojärjestelmästä. <code>options</code> voidaan määrittää seuraavien asetusten hallintaa varten:    <ul><li><code>BlockSize</code> : Niiden tavujen m&#228;&#228;r&#228;, jotka luetaan ennen tietokuluttajan odottamista. Oletus arvo on 4 megatavua.</li><li><code>RequestSize</code> : Niiden tavujen m&#228;&#228;r&#228;, jotka yritet&#228;&#228;n lukea yksitt&#228;isess&#228; HTTP-pyynn&#246;ss&#228; palvelimeen. Oletusarvo on 4 megatavua.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests-asetus tukee tietojen tavallista nopeampaa lataamista palvelimesta m&#228;&#228;ritt&#228;m&#228;ll&#228; samanaikaisesti tehtyjen pyynt&#246;jen m&#228;&#228;r&#228;n muistin k&#228;yt&#246;n kustannuksella. Vaadittu muisti on (ConcurrentRequest \* Request size). Oletusarvo on 16.</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, palautetaanko tiedostot puumaisena hakemiston&#228;kym&#228;n&#228; vai litte&#228;n&#228; luettelona. Oletusarvo on false.</li></ul>



## Category
Accessing data
