---
title: Spark.Tables
---

# Spark.Tables


Hiermee wordt een tabel geretourneerd waarin de tabellen voor het opgegeven Spark-cluster worden weergegeven.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd met de tabellen voor de <code>host</code> van het Spark-cluster die <code>protocol</code> gebruikt. Geldige protocollen zijn:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Geef de tabellen in een Azure Spark-exemplaar weer.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



