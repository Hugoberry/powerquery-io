---
title: Vertica.Database
---

# Vertica.Database


Tuo tietoja Verticasta


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa käytettävissä olevien rakenteiden taulukon palvelimessa, joka on nimetty `server`\-parametrilla, tietokannassa, joka on nimetty `database`\-parametrilla. Valinnainen tietueparametri `options` voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `ConnectionTimeout`: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn sallitaan olla käynnissä, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.


## Examples

### Example #1
Näytä Vertican taulukoiden luettelo
```powerquery

```



