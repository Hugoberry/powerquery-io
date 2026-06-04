---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importējiet datus no Amazon Redshift datu bāzes.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā uzskaitītas tabulas Amazon Redshift klasterī `server` datu bāzē `database`. Neobligāts ieraksta parametrs, `options`, var tikt noteikts, lai kontrolētu šādas opcijas:

-   `Provider Name`: teksta vērtība, ko lietot kā pakalpojuma sniedzēja nosaukumu savienojumam. Tas tiek lietots, kad tiek izmantota Microsoft autentifikācija.
-   `Batch Size`: rindu skaits, kas tiek ienestas vienā izsaukumā uz serveri.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



