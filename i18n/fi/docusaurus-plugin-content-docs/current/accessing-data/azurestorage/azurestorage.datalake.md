---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Palauttaa siirtymistaulukon, joka sisältää määritetystä säilöstä ja sen alikansioista löytyneet tiedostot Azure Data Lake Storagesta.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Palauttaa siirtymistaulukon, joka sisältää määritetystä säilöstä ja sen alikansioista tilin URL-osoitteessa `endpoint` löytyneet tiedostot Azure Data Lake Storage -tiedostojärjestelmästä. `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `BlockSize` : Niiden tavujen määrä, jotka luetaan ennen tietokuluttajan odottamista. Oletus arvo on 4 megatavua.
-   `RequestSize` : Niiden tavujen määrä, jotka yritetään lukea yksittäisessä HTTP-pyynnössä palvelimeen. Oletusarvo on 4 megatavua.
-   `ConcurrentRequests` : ConcurrentRequests-asetus tukee tietojen tavallista nopeampaa lataamista palvelimesta määrittämällä samanaikaisesti tehtyjen pyyntöjen määrän muistin käytön kustannuksella. Vaadittu muisti on (ConcurrentRequest \* Request size). Oletusarvo on 16.
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka määrittää, palautetaanko tiedostot puumaisena hakemistonäkymänä vai litteänä luettelona. Oletusarvo on false.



## Category
Accessing data
