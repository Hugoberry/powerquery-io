---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Tuo tietoja HDInsight Interactive Querystä


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa HDInsight Interactive Querystä luettelon taulukoita, jotka on määrittänyt <code>database</code> HDInsight Interactive Query <code>-palvelimessa</code>. Portin numero voidaan määrittää valinnaisesti palvelimen kanssa eroteltuna kaksoispisteellä. Valinnainen <code>options</code>-parametri voidaan määrittää ohjaamaan seuraavia asetuksia:<ul>        <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.</li>        <li><code>CommandTimeout</code>: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.</li></ul><code>Options</code>määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].


