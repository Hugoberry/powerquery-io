---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Palauttaa siirtymistaulukon, joka sisältää Azure-tallennustilasäilön määritetyltä tililtä löytyneet säilöt.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Palauttaa siirtymistaulukon, joka sisältää rivin kullekin Azure-tallennustilasäilön tilin URL-osoitteesta `account` löytyneelle säilölle. Kukin rivi sisältää linkin säilön blob-objekteihin. `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `BlockSize` : Niiden tavujen määrä, jotka luetaan ennen tietokuluttajan odottamista. Oletus arvo on 4 megatavua.
-   `RequestSize` : Niiden tavujen määrä, jotka yritetään lukea yksittäisessä HTTP-pyynnössä palvelimeen. Oletusarvo on 4 megatavua.
-   `ConcurrentRequests` : ConcurrentRequests-asetus tukee tietojen tavallista nopeampaa lataamista palvelimesta määrittämällä samanaikaisesti tehtyjen pyyntöjen määrän muistin käytön kustannuksella. Vaadittu muisti on (ConcurrentRequest \* Request size). Oletusarvo on 16.



## Category
Accessing data
