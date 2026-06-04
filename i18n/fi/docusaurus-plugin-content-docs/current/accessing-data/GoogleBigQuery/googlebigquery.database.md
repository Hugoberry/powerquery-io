---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Tuo tiedot Google BigQuery-tietokannasta.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, jossa luetellaan käytettävissä olevat projektit Google BigQueryssä. Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `ConnectionTimeout`: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on ODBC-yhteyden aikakatkaisuarvo.
-   `CommandTimeout`: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan.
-   `BillingProject`: Laskutusprojektin tunnus. Oletusarvo on ensimmäinen käytettävissä oleva projekti.
-   `UseStorageApi`: Määrittää, käytetäänkö BigQuery-tallennustilan ohjelmointirajapintaa suurille tulosjoukoille. Oletusarvo on tosi tallennustilan ohjelmointirajapinnan käyttämisessä. Aseta arvoksi epätosi, jos et käytä tallennustilan ohjelmointirajapintaa

Tietueparametriksi on määritetty \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Näytä Google BigQueryn käytettävissä olevien projektien luettelo
```powerquery
GoogleBigQuery.Database()
```



