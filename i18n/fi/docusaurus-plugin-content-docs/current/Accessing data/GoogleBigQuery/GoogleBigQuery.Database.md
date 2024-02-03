---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Tuo tiedot Google BigQuery-tietokannasta.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Palauttaa taulukon, jossa on Google BigQueryssä käytettävissä olevien projektien luettelo. Valinnainen tietueparametri, <code>asetukset</code>, voidaan määrittää ohjaamaan seuraavia asetuksia:      <ul>        <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen. Oletusarvo on ODBC-yhteyden aikakatkaisun arvo.</li>        <li><code>CommandTimeout</code>: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan.</li>        <li><code>BillingProject</code>: Laskutusprojektin nimi. Oletusarvo on ensimmäinen käytettävissä oleva projekti.</li>        <li><code>UseStorageApi</code>: Määrittää, käytetäänkö BigQuery Storage APIa suurissa tulosjoukoissa. Oletusarvo on määritetty arvoon tosi, jotta Storage APIa käytetään. Määritä arvoksi epätosi, jos et halua käyttää Storage APIa</li>      </ul>    Tietueparametri määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].    


## Examples

### Example #1 
Näytä Google BigQueryn käytettävissä olevien projektien luettelo
```powerquery
GoogleBigQuery.Database()
```



