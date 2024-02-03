---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Returnează un tabel ce listează tabelele din clusterul Spark specificat.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Returnează un tabel ce listează tabelele din gazda <code>host</code> de cluster Spark utilizând <code>protocol</code>. Protocoale valide sunt:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Returnează un tabel ce listează tabelele din clusterul Spark specificat.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



