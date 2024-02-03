---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Palauttaa taulukon, jossa on luettelo määritetyn Spark-klusterin taulukoista.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Palauttaa Spark-klusterin <code>host</code>-kohteen taulukoiden taulukkoluettelon käyttäen <code>protocol</code>-kohdetta. Kelvolliset protokollat ovat seuraavat:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Palauttaa taulukon, jossa on luettelo määritetyn Spark-klusterin taulukoista.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



