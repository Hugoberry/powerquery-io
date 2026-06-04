---
title: Spark.Tables
---

# Spark.Tables


Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark `host` in pri tem uporabi `protocol`. Veljavni protokoli so: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Navedite tabele v primerku storitve Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



