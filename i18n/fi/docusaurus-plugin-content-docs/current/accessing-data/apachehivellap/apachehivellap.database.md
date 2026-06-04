---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Tuo tietoja HIVE LLAP:stä


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Palauttaa Hive LLAP:stä luettelon taulukoita, jotka on määrittänyt `database`\-kohde Hive LLAP `-palvelimessa` käyttäen valittua `protocol`\-kohdetta. Portin numero voidaan määrittää valinnaisesti palvelimen kanssa eroteltuna kaksoispisteellä. Thrift Transport Protocol on luetteloitu tyyppi, jonka arvot ovat Standard ja HTTP. Valinnainen `options`\-parametri voidaan määrittää seuraavien asetusten hallintaa varten:

-   `ConnectionTimeout`: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin lopetetaan yritys muodostaa yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.
-   `CommandTimeout`: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.

`Options`\-parametri määritetään muodossa \[asetus1 = arvo1, asetus2 = arvo2...\].


