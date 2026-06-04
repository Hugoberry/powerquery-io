---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Tuo tietoja Amazon Redshift -tietokannasta.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, jossa on luettelo Amazon Redshift -klusterin `server` taulukoista tietokannassa `database`. Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `Provider Name`: Yhteyden palveluntarjoajan nimenä käytettävä tekstiarvo. Tätä käytetään Microsoft-todennusta käytettäessä.
-   `Batch Size`: Niiden rivien määrä, jotka noudetaan yksittäisessä kutsussa palvelimeen.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



