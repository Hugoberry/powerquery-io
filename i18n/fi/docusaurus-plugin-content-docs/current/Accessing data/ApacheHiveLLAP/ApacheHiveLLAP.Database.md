---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Palauttaa Hive LLAP:stä luettelon taulukoita, jotka on määrittänyt <code>database</code>-kohde Hive LLAP <code>-palvelimessa</code> käyttäen valittua <code>protocol</code>-kohdetta. Portin numero voidaan määrittää valinnaisesti palvelimen kanssa eroteltuna kaksoispisteellä. Thrift Transport Protocol on luetteloitu tyyppi, jonka arvot ovat Standard ja HTTP. Valinnainen <code>options</code>-parametri voidaan määrittää seuraavien asetusten hallintaa varten:<ul>        <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin lopetetaan yritys muodostaa yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.</li>        <li><code>CommandTimeout</code>: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.</li></ul><code>Options</code>-parametri määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].


