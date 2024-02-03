---
title: Vertica.Database
---

# Vertica.Database


## Description

Tuo tietoja Verticasta


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa käytettävissä olevien rakenteiden taulukon palvelimessa, joka on nimetty <code>server</code>-parametrilla, tietokannassa, joka on nimetty <code>database</code>-parametrilla.Valinnainen tietueparametri <code>options</code> voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:<ul>    <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.</li>    <li><code>CommandTimeout </code>: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn sallitaan olla käynnissä, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.</li></ul>


## Examples

### Example #1 
Näytä Vertican taulukoiden luettelo
```powerquery

```



