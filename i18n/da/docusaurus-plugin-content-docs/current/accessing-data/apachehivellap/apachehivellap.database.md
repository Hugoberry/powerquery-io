---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importer data fra en Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Returnerer en liste over tabeller fra Hive LLAP angivet af `databasen` på Hive LLAP`-serveren` ved brug af den valgte `protokol`. Du kan vælge at angive et portnummer sammen med serveren adskilt af et kolon. Thrift Transport-protokollen er en specificeret type med værdierne "Standard", "HTTP". Du kan vælge at angive en parameter for følgende `indstillinger`:

-   `ConnectionTimeout`: En varighed, som kontrollerer ventetiden, før et forsøg på at oprette forbindelse til serveren afbrydes. Standardværdien afhænger af driveren.
-   `CommandTimeout`: En varighed, som kontrollerer, hvor længe forespørgslen kan køre på serveren, før den annulleres. Standardværdien afhænger af driveren.

En parameter for `indstillinger` angives som \[option1 = value1, option2 = value2...\].


