---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Returnerer en tabelliste over tabeller i den angivne Spark-klynge.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Returnerer en tabelliste over tabeller i Spark-klyngen <code>host</code> ved hjælp af <code>protocol</code>. Gyldige protokoller er:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Returnerer en tabelliste over tabeller i den angivne Spark-klynge.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



