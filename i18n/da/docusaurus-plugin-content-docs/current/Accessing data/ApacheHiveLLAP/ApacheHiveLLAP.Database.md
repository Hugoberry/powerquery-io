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

Returnerer en liste over tabeller fra Hive LLAP angivet af <code>databasen</code> på Hive LLAP<code>-serveren</code> ved brug af den valgte <code>protokol</code>. Du kan vælge at angive et portnummer sammen med serveren adskilt af et kolon. Thrift Transport-protokollen er en specificeret type med værdierne "Standard", "HTTP". Du kan vælge at angive en parameter for følgende <code>indstillinger</code>:<ul>        <li><code>ConnectionTimeout</code>: En varighed, som kontrollerer ventetiden, før et forsøg på at oprette forbindelse til serveren afbrydes. Standardværdien afhænger af driveren.</li>        <li><code>CommandTimeout</code>: En varighed, som kontrollerer, hvor længe forespørgslen kan køre på serveren, før den annulleres. Standardværdien afhænger af driveren.</li></ul>En parameter for <code>indstillinger</code> angives som [option1 = value1, option2 = value2...].


