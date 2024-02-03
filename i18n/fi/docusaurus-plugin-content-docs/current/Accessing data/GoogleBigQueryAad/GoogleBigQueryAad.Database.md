---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Tietojen tuominen Google BigQuery -tietokannasta Azure AD:n avulla


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Palauttaa taulukon, jossa on Google BigQueryssä käytettävissä olevien Azure AD for <code>Billing Project ID</code> -projektien luettelo. Valinnainen tietueparametri, <code>asetukset</code>, voidaan määrittää ohjaamaan seuraavia asetuksia:      <ul>        <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen. Oletusarvo on ODBC-yhteyden aikakatkaisun arvo.</li>        <li><code>CommandTimeout</code>: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan.</li>        <li><code>UseStorageApi</code>: Määrittää, käytetäänkö BigQuery Storage APIa suurissa tulosjoukoissa. Oletusarvo on määritetty arvoon tosi, jotta Storage APIa käytetään. Määritä arvoksi epätosi, jos et halua käyttää Storage APIa</li>        <li><code>AudienceUri</code>: Tämä on käyttäjäryhmän URI-merkkijono, jota ODBC-ohjain voi käyttää tunnuksen vaihtopyynnöissä. Tämän kentän on oltava täydellinen URI (eli //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), jossa pool_id on maailmanlaajuisesti yksilöivä nimi työvoimavarannon tunnistamiseksi.</li>      </ul>    Tietueparametri määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].    


## Examples

### Example #1 
Luettele käytettävissä olevat projektit Google BigQueryssä Azure AD:n avulla
```powerquery
GoogleBigQueryAad.Database()
```



