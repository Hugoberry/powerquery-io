---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Palauttaa siirtymistaulukon, joka sisältää Azure-tallennustilasäilön määritetyltä tililtä löytyneet säilöt.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Palauttaa siirtymistaulukon, joka sisältää rivin kullekin Azure-tallennustilasäilön tilin URL-osoitteesta <code>account</code> löytyneelle säilölle. Kukin rivi sisältää linkin säilön blob-objekteihin. <code>options</code> voidaan määrittää seuraavien asetusten hallintaa varten:    <ul><li><code>BlockSize</code> : Niiden tavujen m&#228;&#228;r&#228;, jotka luetaan ennen tietokuluttajan odottamista. Oletus arvo on 4 megatavua.</li><li><code>RequestSize</code> : Niiden tavujen m&#228;&#228;r&#228;, jotka yritet&#228;&#228;n lukea yksitt&#228;isess&#228; HTTP-pyynn&#246;ss&#228; palvelimeen. Oletusarvo on 4 megatavua.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests-asetus tukee tietojen tavallista nopeampaa lataamista palvelimesta m&#228;&#228;ritt&#228;m&#228;ll&#228; samanaikaisesti tehtyjen pyynt&#246;jen m&#228;&#228;r&#228;n muistin k&#228;yt&#246;n kustannuksella. Vaadittu muisti on (ConcurrentRequest \* Request size). Oletusarvo on 16.</li></ul>



## Category
Accessing data
