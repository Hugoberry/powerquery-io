---
title: Spark.Tables
---

# Spark.Tables


## Description

Returnerer en tabelliste over tabeller i den angivne Spark-klynge.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Returnerer en tabelliste over tabeller i Spark-klyngen <code>host</code> ved hjælp af <code>protocol</code>. Gyldige protokoller er:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Vis tabellerne på en liste i en Azure Spark-instans.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



