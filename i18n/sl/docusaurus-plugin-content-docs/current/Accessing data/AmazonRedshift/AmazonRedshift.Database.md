---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Uvozite podatke iz zbirke podatkov storitve Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, v kateri so navedene tabele v gruči storitve Amazon Redshift <code>v</code> zbirke podatkov in <code>zbirke</code>.  Določite lahko izbirni parameter zapisa <code>options</code> za nadzor teh možnosti:<ul><li><code>Ime ponudnika</code>: besedilna vrednost, ki jo želite uporabiti kot ime ponudnika za povezavo. To se uporablja pri uporabi datoteke Microsoft Authentication.</li><li><code>Batch Size</code>: število vrstic, ki so dostavljene z enim klicem strežnika.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



