---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Tuo tietoja Amazon Redshift -tietokannasta.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, jossa on luettelo Amazon Redshift -klusterin <code>palvelimen</code> tietokannan <code>tietokannan</code>.  Valinnainen tietueparametri <code>asetukset</code> voidaan määrittää ohjaamaan seuraavia asetuksia:<ul><li><code>Palvelun nimi -</code>: Tekstiarvo, jota käytetään yhteyden palvelun nimenä. Tätä käytetään käytettäessä Microsoft Authentication.</li><li><code>Batch Size -</code>: niiden rivien määrä, jotka noudetaan yksittäisessä kutsussa palvelimeen.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



