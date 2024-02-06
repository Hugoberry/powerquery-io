---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Hiermee wordt een tabel geretourneerd waarin de tabellen voor het opgegeven Spark-cluster worden weergegeven.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd met de tabellen voor de <code>host</code> van het Spark-cluster die <code>protocol</code> gebruikt. Geldige protocollen zijn:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Hiermee wordt een tabel geretourneerd waarin de tabellen voor het opgegeven Spark-cluster worden weergegeven.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



