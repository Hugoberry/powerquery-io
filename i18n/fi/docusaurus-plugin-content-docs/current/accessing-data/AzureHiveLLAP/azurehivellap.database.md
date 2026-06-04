---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Tuo tietoja HDInsight Interactive Querystä


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa HDInsight Interactive Querystä luettelon taulukoita, jotka on määrittänyt `database` HDInsight Interactive Query `-palvelimessa`. Portin numero voidaan määrittää valinnaisesti palvelimen kanssa eroteltuna kaksoispisteellä. Valinnainen `options`\-parametri voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `ConnectionTimeout`: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.
-   `CommandTimeout`: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.

`Options`määritetään muodossa \[asetus1 = arvo1, asetus2 = arvo2...\].


