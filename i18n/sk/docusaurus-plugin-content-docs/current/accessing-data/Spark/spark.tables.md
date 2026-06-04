---
title: Spark.Tables
---

# Spark.Tables


Vráti tabuľku, ktorá uvádza tabuľky zadané v klastri Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku, ktorá uvádza tabuľky v hostiteľovi `host` klastra Spark, použitím protokolu `protocol`. Platné protokoly sú: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Zobrazte zoznam tabuliek v inštancii riešenia Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



