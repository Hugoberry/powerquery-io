---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Tietojen tuominen Google BigQuery -tietokannasta Microsoft Entra ID:n avulla


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, jossa luetellaan käytettävissä olevat projektit Google BigQueryssä käyttämällä Microsoft Entra ID:tä kohteelle `Billing Project ID` . Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `ConnectionTimeout`: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on ODBC-yhteyden aikakatkaisuarvo.
-   `CommandTimeout`: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan.
-   `UseStorageApi`: Määrittää, käytetäänkö BigQuery-tallennustilan ohjelmointirajapintaa suurille tulosjoukoille. Oletusarvo on tosi tallennustilan ohjelmointirajapinnan käyttämisessä. Aseta arvoksi epätosi, jos et käytä tallennustilan ohjelmointirajapintaa
-   `AudienceUri`: Tämä on käyttäjäryhmän URI, jota ODBC-ohjain voi käyttää tunnusten vaihtopyynnöissä. Tämän kentän on oltava täydellinen URI (eli //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), jossa pool\_id on maailmanlaajuisesti yksilöivä nimi työvoimavarannon tunnistamiseksi.

Tietueparametriksi on määritetty \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Luettele käytettävissä olevat projektit Google BigQueryssä Microsoft Entra ID:n avulla
```powerquery
GoogleBigQueryAad.Database()
```



