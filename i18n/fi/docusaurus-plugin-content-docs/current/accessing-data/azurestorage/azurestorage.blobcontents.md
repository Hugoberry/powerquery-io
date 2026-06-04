---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Palauttaa määritetyn blob-objektin sisällön Azure-tallennustilasäilöstä.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Palauttaa BLOB-objektin sisällön URL-osoitteessa (`url`) Azure-tallennustilasäilöstä. `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `BlockSize` : Niiden tavujen määrä, jotka luetaan ennen tietokuluttajan odottamista. Oletus arvo on 4 megatavua.
-   `RequestSize` : Niiden tavujen määrä, jotka yritetään lukea yksittäisessä HTTP-pyynnössä palvelimeen. Oletusarvo on 4 megatavua.
-   `ConcurrentRequests` : ConcurrentRequests-asetus tukee tietojen tavallista nopeampaa lataamista palvelimesta määrittämällä samanaikaisesti tehtyjen pyyntöjen määrän muistin käytön kustannuksella. Vaadittu muisti on (ConcurrentRequest \* Request size). Oletusarvo on 16.



## Category
Accessing data
