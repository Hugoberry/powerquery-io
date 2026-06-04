---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Uvozite podatke iz zbirke podatkov storitve Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, v kateri so navedene tabele v gruči storitve Amazon Redshift `v` zbirke podatkov in `zbirke`. Naveden je lahko izbirni parameter zapisa `options` za nadzor teh možnosti:

-   `Ime ponudnika`: Besedilna vrednost, ki je uporabljena kot ime ponudnika za povezavo. To je uporabljeno, ko je uporabljeno Microsoftovo preverjanje pristnosti.
-   `Velikost paketa`: Število vrstic, pridobljenih z enim klicem strežnika.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



