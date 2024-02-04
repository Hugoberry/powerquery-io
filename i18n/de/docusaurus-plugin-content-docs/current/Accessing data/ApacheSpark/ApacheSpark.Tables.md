---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Gibt eine Tabellenauflistung der Tabellen auf dem angegebenen Spark-Cluster zurück.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Gibt eine Tabellenauflistung der Tabellen auf dem angegebenen Spark-Cluster <code>host</code> mithilfe von <code>protocol</code> zurück.  Die folgenden Protokolle sind gültig:Nr. [validProtocols]


## Examples

### Example #1 
Gibt eine Tabellenauflistung der Tabellen auf dem angegebenen Spark-Cluster zurück.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



