---
title: Spark.Tables
---

# Spark.Tables


Retorna una taula que enumera les taules del clúster de l'Spark especificat.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Retorna una taula que enumera les taules del clúster de l'Spark `host` amb el `protocol`. Els protocols vàlids són: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Enumera les taules d'una instància de l'Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



