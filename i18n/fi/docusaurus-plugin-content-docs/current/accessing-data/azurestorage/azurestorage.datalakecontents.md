---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Palauttaa määritetyn tiedoston sisällön Azure Data Lake Storage -tiedostojärjestelmästä.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Palauttaa URL-osoitteessa `url` olevan tiedoston sisällön Azure Data Lake Storage -tiedostojärjestelmästä. `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `BlockSize` : Niiden tavujen määrä, jotka luetaan ennen tietokuluttajan odottamista. Oletus arvo on 4 megatavua.
-   `RequestSize` : Niiden tavujen määrä, jotka yritetään lukea yksittäisessä HTTP-pyynnössä palvelimeen. Oletusarvo on 4 megatavua.
-   `ConcurrentRequests` : ConcurrentRequests-asetus tukee tietojen tavallista nopeampaa lataamista palvelimesta määrittämällä samanaikaisesti tehtyjen pyyntöjen määrän muistin käytön kustannuksella. Vaadittu muisti on (ConcurrentRequest \* Request size). Oletusarvo on 16.



## Category
Accessing data
