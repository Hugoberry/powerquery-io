---
title: Spark.Tables
---

# Spark.Tables


## Description

Palauttaa taulukon, jossa on luettelo määritetyn Spark-klusterin taulukoista.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Palauttaa Spark-klusterin <code>host</code>-kohteen taulukoiden taulukkoluettelon käyttäen <code>protocol</code>-kohdetta. Kelvolliset protokollat ovat seuraavat:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Näytä luettelo Azure Spark -esiintymän taulukoista.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



